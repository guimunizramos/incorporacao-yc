import thiagoPhoto from "@/assets/thiago-cardim.png";
import rodrigoPhoto from "@/assets/foto-rodrigo.png";

const hosts = [
  {
    name: "THIAGO CARDIM",
    role: "Anfitrião",
    title: "CEO YouCon",
    description: "Arquiteto focado em entregar residências únicas. É especialista em traduzir os desejos das famílias em projetos atemporais, utilizando métodos construtivos que garantem conforto e previsibilidade.",
    photo: thiagoPhoto,
  },
  {
    name: "RODRIGO VILELA",
    role: "Convidado Especial",
    title: "Arka Engenharia",
    description: "Engenheiro especialista em cálculo estrutural e soluções em BIM. É o responsável por transformar projetos arquitetônicos de alta complexidade em estruturas metálicas viáveis e extremamente seguras.",
    photo: rodrigoPhoto,
  },
];

const HostsSection = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A união da Estética com a Engenharia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 max-w-5xl mx-auto">
          {hosts.map((host, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border"
            >
              {/* Avatar */}
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-2 border-primary/30">
                {host.photo ? (
                  <img
                    src={host.photo}
                    alt={host.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-2xl md:text-4xl font-bold text-muted-foreground">
                      {host.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="text-lg md:text-2xl font-bold text-primary mb-1">
                {host.name}
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                ({host.role})
              </p>
              <p className="text-sm md:text-lg font-semibold text-foreground mb-2 md:mb-4">
                {host.title}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {host.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostsSection;