import { database } from "../firebase";
import { ref, set } from "firebase/database";

interface CreateRoutineProps {
  id: string | number;
  routineName: string;
  categories: "beginner" | "intermediary" | "advanced";
}

export const createRoutine = async ({
  id,
  routineName,
  categories,
}: CreateRoutineProps) => {
  try {
    await set(ref(database, `routines/${id}`), {
      routineId: id,
      routineName: routineName,
      categories: categories,
    });
    console.log("Dados salvos com sucesso!");
  } catch (e) {
    console.error(`Erro ao gravar os dados no banco: ${e}`);
  }
};
