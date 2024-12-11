import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@app/components/ui/card";
import { Button } from "@app/components/ui/button";
import { Code2, Github, Linkedin } from "lucide-react";

export default function EmConstrucao() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Code2 className="h-6 w-6" />
            Em Construção
            <Code2 className="h-6 w-6" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-center">
            Meu portfólio de engenharia de software está atualmente sendo
            construído com a mesma dedicação e atenção aos detalhes que trago
            para cada projeto.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic">
            &quot;O software é uma grande combinação entre arte e
            engenharia.&quot; - Bill Gates
          </blockquote>
          <p className="text-center text-muted-foreground">
            Obrigado pela sua paciência. Em breve, compartilharei meus projetos
            e experiências.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Button variant="outline" size="icon">
            <a target="_blank" href="https://github.com/alisson-moura/">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alisson-mo-moura/"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
