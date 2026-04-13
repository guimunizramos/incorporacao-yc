import { Maximize, Rocket, Scale } from "lucide-react";

const benefits = [
  {
    icon: Maximize,
    title: "Amplitude e Beleza sem Barreiras",
    description: "Crie grandes fachadas de vidro e salas totalmente abertas, sem aqueles pilares indesejados no meio do caminho.",
  },
  {
    icon: Rocket,
    title: "As Chaves na Mão Muito Antes",
    description: "Sua casa montada com precisão de fábrica, antecipando o fim da obra e eliminando o \"atraso eterno\".",
  },
  {
    icon: Scale,
    title: "Comparativo Real (Concreto x Metálica)",
    description: "Entenda em quais cenários essa solução se torna mais inteligente e rentável para o seu orçamento.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6">
            Por que olhar além da construção tradicional?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-5 h-5 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-base md:text-xl lg:text-2xl font-bold text-foreground mb-2 md:mb-4">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;