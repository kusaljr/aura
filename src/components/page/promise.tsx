import { cn } from "@/lib/utils";
import { ChartLine, Lightbulb, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export function InvestCarousel() {
  return (
    <div
      className={cn(
        "w-full text-primary-foreground lg:mx-10 mx-0 rounded-xl my-10"
      )}
    >
      <h2 className="text-2xl px-10 lg:px:0 text-center py-5 font-bold text-gray-800 dark:text-white md:text-4xl">
        Why <span className="text-primary">Invest</span> With Us?
      </h2>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              <h2 className="text-2xl font-semibold mb-2">Risk Mitigation</h2>
              <p className="text-muted-foreground">
                consectetur adipisicing elit. In, nostrum ullam. Voluptatibus.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/about">
                <Button variant="outline">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              <h2 className="text-2xl font-semibold mb-2">
                Expert Management Team{" "}
              </h2>
              <p className="text-muted-foreground">
                A team with deep industry experience, ensuring optimal property
                performance and growth.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/about">
                <Button variant="outline">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              <h2 className="text-2xl font-semibold mb-2">
                Strategic Acquisitions
              </h2>
              <p className="text-muted-foreground">
                Targeted property investments in high-growth areas to maximize
                value appreciation.{" "}
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/about">
                <Button variant="outline">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

const carouselItems = [
  {
    icon: ChartLine,
    title: "Consistent Rental Income",
    description:
      "Steady cash flow from well-managed properties, delivering reliable returns to investors.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Acquisitions",
    description:
      "Targeted property investments in high-growth areas to maximize value appreciation.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Mitigation",
    description:
      "Diversified portfolios and comprehensive due diligence to minimize investment risks.",
  },
  {
    icon: Users,
    title: "Expert Management Team",
    description:
      "A team with deep industry experience, ensuring optimal property performance and growth.",
  },
];
