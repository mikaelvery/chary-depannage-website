import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface CardOptionProps {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void; // ✅ Ajoute ça
}

export default function CardOption({ title, icon, href, onClick }: CardOptionProps) {
  const content = (
    <Card
      onClick={onClick}
      className="w-full sm:min-w-[200px] border border-border bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow rounded-2xl p-4 cursor-pointer hover:scale-[1.02]"
    >
      <CardContent className="flex flex-col items-center gap-3">
        {icon && <div className="text-3xl">{icon}</div>}
        <h3 className="text-xl font-semibold text-center">{title}</h3>
      </CardContent>
    </Card>
  );

  return href ? (
    <Link href={href} className="w-full sm:w-auto">
      {content}
    </Link>
  ) : (
    <div className="w-full sm:w-auto">{content}</div>
  );
}
