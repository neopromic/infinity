/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Judson } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

judson({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";

export function HomeContent() {
  return (
    <main className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <img
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="550"
            src="/placeholder.svg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                Reach Your Fitness Goals
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover the perfect workout routines to help you stay on track
                and achieve your fitness objectives.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-start gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Recommended Workouts
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the perfect workout routines to help you stay on track
              and achieve your fitness goals.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <Card>
              <img
                alt="Workout 1"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
                height="200"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Full Body Workout</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A comprehensive routine targeting all major muscle groups.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Workout 2"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
                height="200"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Cardio Blast</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  High-intensity interval training to boost your endurance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Workout 3"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
                height="200"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Strength Training</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Build muscle and improve overall strength.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-start gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Track Your Progress
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Stay motivated and on top of your fitness journey with our
              intuitive workout calendar.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <LineChart className="aspect-[4/3]" />
          </div>
        </div>
      </section>
    </main>
  );
}

function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
