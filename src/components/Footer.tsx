const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 md:py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-muted-foreground text-xs md:text-sm">
          © {currentYear} YouCon Arquitetura e Engenharia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
