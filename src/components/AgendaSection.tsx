import { Check } from "lucide-react";
import { Button } from "./ui/button";

const agendaItems = [
  "A força da Estrutura Metálica na prática para criar vãos livres e integração total.",
  "Como funciona a linha de produção e montagem que elimina o improviso do canteiro de obras.",
  "Abertura de números reais: O comparativo financeiro entre o concreto e a estrutura metálica.",
  "Mesa Redonda: O momento exato para você trazer as perguntas sobre o seu terreno ou as ideias que tem para a sua futura casa.",
];

const AgendaSection = () => {
  const scrollToForm = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-10 md:py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6">
              O que vamos apresentar nesta Consultoria Fechada:
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-muted-foreground">
              Nesta mesa redonda exclusiva, o CEO da YouCon, Thiago Cardim, e o engenheiro Rodrigo Vilela (Arka) vão abrir os bastidores de casas reais e tirar todas as suas dúvidas.
            </p>
          </div>

          <div className="space-y-4 md:space-y-5 mb-8 md:mb-12">
            {agendaItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 md:p-5 rounded-lg md:rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-5 h-5 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 md:w-5 md:h-5 text-primary" />
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="hero-outline"
              size="xl"
              onClick={scrollToForm}
              className="w-full sm:w-auto text-sm md:text-base h-12 md:h-14"
            >
              GARANTIR MEU ACESSO GRATUITO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;