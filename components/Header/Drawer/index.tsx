"use client";

import Avatar from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { readUserData } from "@/services/database/utils/readUserData";
import { useFirebaseAuth } from "@/utils/context/authContext";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback, useMemo } from "react";

export const Drawer = () => {
  const { setTheme, theme } = useTheme();
  const { user } = useFirebaseAuth();
  const [userData, setUserData] = useState<{ username: string } | null>(null);
  const [loading, setLoading] = useState(true);

  const avatarURL = user?.photoURL as string;
  const userID = user?.uid;

  // Carregar dados do usuário
  const getUserData = useCallback(async () => {
    if (!userID) return;
    try {
      const data = await readUserData(userID);
      setUserData(data);
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
    } finally {
      setLoading(false);
    }
  }, [userID]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  // Funções memoizadas para temas
  const themeIcon = useMemo(
    () => (
      <>
        {theme === "light" ? (
          <Sun className="w-[1.2rem] h-[1.2rem] transition-all block rotate-0 scale-100" />
        ) : (
          <Moon className="w-[1.2rem] h-[1.2rem] transition-all block rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
        )}
        <p>{theme === "dark" ? "Dark" : "Light"}</p>
      </>
    ),
    [theme]
  );

  if (!user) {
    return (
      <Sheet>
        <SheetTrigger>
          <Button size="icon" variant="ghost" className="group">
            <Menu className="group-hover:rotate-4s5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col space-y-2">
          <SheetHeader>
            <SheetTitle>Infinity</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button size="icon" variant="ghost" className="group">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            Olá,{" "}
            {loading ? "Carregando..." : userData?.username || user.displayName}
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
