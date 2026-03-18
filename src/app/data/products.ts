export interface Product {
  id: string;
  nameKey: string;
  descKey: string;
  image: string;
  categoryEn: string;
  categoryEs: string;
  detailsEn: {
    about: string;
    uses: string[];
    packaging: string[];
    certifications: string[];
    chemicalPresentation: string;
  };
  detailsEs: {
    about: string;
    uses: string[];
    packaging: string[];
    certifications: string[];
    chemicalPresentation: string;
  };
}

export const products: Product[] = [
  {
    id: "minit-wood",
    nameKey: "products.wood.name",
    descKey: "products.wood.desc",
    image: "https://images.unsplash.com/photo-1768783028617-423227f67f86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwbWF0ZXJpYWwlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MzY5OTgyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    categoryEn: "Wood Protection",
    categoryEs: "Protección de Madera",
    technicalSheet: "https://listado.mercadolibre.com.ar/pagina/minitignifugos/?item_id=MLA1127759488&category_id=MLA413242&client=recoview-selleritems&recos_listing=true",
    detailsEn: {
      about: "MiniT Wood is a Class A Fire Retardant, made from natural salts, which results in a colorless, odorless liquid that does not leave active fire-fighting agents, dispersants, and penetrants completely absorbent, so it does not modify the toxicity of the smoke of the treated material, only reduces the amount of smoke or reduces fire generation. It prevents fire propagation and at the same time, helps to retard the generation of smoke and gases up to 70%. Does not modify the color or texture of the treated material, only reduces the amount of smoke or reduces the generation of fire. It is a NON-TOXIC product, FRIENDLY WITH THE ENVIRONMENT, BIODEGRADABLE and PET FRIENDLY.",
      uses: [
        "Permeable materials such as: wood, cardboard, straw, paper, mdf, osb, agglomerate, etc.",
        "In the case of use on wood, it also prevents the attack of fungi, bacteria, moths and termites.",
      ],
      packaging: [
        "Bags: 25 kg",
        "Containers: 5 and 10 liters",
      ],
      certifications: [
        "IRAM 11910-3",
        "NBR 9442:1986",
        "ASTM E 162:1994",
      ],
      chemicalPresentation: "The chemical comes in a powder inside a bag with the exact amount for its dilution with regular water until the bag is completely filled. (The bag should not be diluted more than indicated on the bag, as it will lose its fire retardant properties).",
    },
    detailsEs: {
      about: "Acerca de MiniT MADERAS (IGNÍFUGO Y PRESERVADOR). Es Retardante de Fuego Clase A, elaborado a partir de sales naturales, que de como resultado un líquido incoloro, inodoro, no tóxico que posee agentes activos contra el fuego, dispersantes y penetrantes completamente absorbentes, por lo que no modifica la toxicidad del humo del material tratado, solo disminuye la cantidad de humo o reduce la generación de fuego. Evita la propagación del fuego y, al mismo tiempo, contribuye a retardar la generación de humo y gases hasta en un 70%. No modifica el color ni la textura del material tratado, solo disminuye la cantidad de humo o reduce la generación de fuego. Es un producto NO TÓXICO, AMIGABLE CON EL MEDIO AMBIENTE, BIODEGRADABLE y PET FRIENDLY.",
      uses: [
        "Se utiliza en materiales permeables tales como: maderas, cartón, paja, papel, mdf, osb, aglomerados, etc. En el caso del uso en madera, también previene el ataque de hongos, bacterias, polillas y termitas.",
      ],
      packaging: [
        "Granel: bolsas de 25 kg.",
        "Bidón: 5 y 10 litros.",
      ],
      certifications: [
        "El RETARDANTE DE FUEGO MINIT está certificado y ensayado por el Instituto Nacional de Tecnología e Industria (INTI) y por laboratorios autorizados en EE. UU. Cumple con los más altos estándares de las siguientes normas:",
        "IRAM 11910-3",
        "NBR 9442:1986",
        "ASTM E 162:1994",
      ],
      chemicalPresentation: "El químico se presenta en polvo dentro de un envase con la cantidad justa para su dilución con agua regular hasta completar el envase. (No se debe diluir más de lo indicado por el envase, ya que perderá sus propiedades retardantes).",
    },
  },
  {
    id: "minit-textile",
    nameKey: "products.textile.name",
    descKey: "products.textile.desc",
    image: "https://images.unsplash.com/photo-1731504801830-5b14ac73d7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFicmljJTIwbWF0ZXJpYWx8ZW58MXx8fHwxNzczNjk5ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    categoryEn: "Textile Protection",
    categoryEs: "Protección Textil",
    detailsEn: {
      about: "MiniT Textile is a specialized fire retardant formulation designed specifically for fabrics, textiles, and upholstery. This Class A fire retardant creates an invisible protective barrier that prevents ignition and significantly reduces flame spread in textile materials. The formula is designed to maintain the texture, color, and breathability of fabrics while providing superior fire protection.",
      uses: [
        "Natural and synthetic fabrics",
        "Curtains and drapes",
        "Upholstery and furniture",
        "Theater and stage curtains",
        "Hotel and hospitality textiles",
        "Protective clothing and workwear",
      ],
      packaging: [
        "Containers: 5, 10, and 20 liters",
        "Bulk: 200-liter drums",
      ],
      certifications: [
        "NFPA 701",
        "ASTM E84",
        "BS 5867",
        "EN 13773",
      ],
      chemicalPresentation: "Ready-to-use liquid formulation. Can be applied by spraying, dipping, or padding methods. One liter covers approximately 3-5 square meters depending on fabric type and application method.",
    },
    detailsEs: {
      about: "MiniT Textil es una formulación retardante de fuego especializada diseñada específicamente para telas, textiles y tapicería. Este retardante de fuego Clase A crea una barrera protectora invisible que previene la ignición y reduce significativamente la propagación de llamas en materiales textiles. La fórmula está diseñada para mantener la textura, color y transpirabilidad de las telas mientras proporciona protección superior contra incendios.",
      uses: [
        "Telas naturales y sintéticas",
        "Cortinas y cortinados",
        "Tapicería y muebles",
        "Cortinas de teatro y escenario",
        "Textiles para hoteles y hospitalidad",
        "Ropa protectora y de trabajo",
      ],
      packaging: [
        "Envases: 5, 10 y 20 litros",
        "Granel: tambores de 200 litros",
      ],
      certifications: [
        "Certificado y ensayado según normas internacionales:",
        "NFPA 701",
        "ASTM E84",
        "BS 5867",
        "EN 13773",
      ],
      chemicalPresentation: "Formulación líquida lista para usar. Puede aplicarse mediante rociado, inmersión o métodos de padding. Un litro cubre aproximadamente 3-5 metros cuadrados dependiendo del tipo de tela y método de aplicación.",
    },
  },
  {
    id: "minit-total",
    nameKey: "products.total.name",
    descKey: "products.total.desc",
    image: "https://images.unsplash.com/photo-1704895376514-3938531148f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNoZW1pY2FsJTIwY29udGFpbmVyJTIwYm90dGxlfGVufDF8fHx8MTc3MzY5OTgyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    categoryEn: "Universal Protection",
    categoryEs: "Protección Universal",
    detailsEn: {
      about: "MiniT Total is a universal fire retardant solution designed for multi-material applications. This versatile Class A fire retardant provides comprehensive protection across a wide range of materials including plastics, composites, foams, and mixed materials. The advanced formula creates a protective barrier that prevents ignition and dramatically reduces flame spread and smoke generation.",
      uses: [
        "Plastics and polymers",
        "Composite materials",
        "Foam and insulation",
        "Mixed material applications",
        "Exhibition and event materials",
        "Packaging and shipping materials",
        "Decorative elements and props",
      ],
      packaging: [
        "Containers: 5, 10, and 20 liters",
        "Bags: 25 kg powder (for dilution)",
        "Bulk: Custom quantities available",
      ],
      certifications: [
        "UL 94",
        "ASTM E84",
        "ISO 9705",
        "EN 13501-1",
      ],
      chemicalPresentation: "Available in ready-to-use liquid form or concentrated powder for dilution. The powder format provides maximum flexibility and cost-effectiveness for large-scale applications. Dilution ratio: 1 part powder to 4 parts water.",
    },
    detailsEs: {
      about: "MiniT Total es una solución retardante de fuego universal diseñada para aplicaciones multi-material. Este versátil retardante de fuego Clase A proporciona protección integral en una amplia gama de materiales incluyendo plásticos, compuestos, espumas y materiales mixtos. La fórmula avanzada crea una barrera protectora que previene la ignición y reduce dramáticamente la propagación de llamas y generación de humo.",
      uses: [
        "Plásticos y polímeros",
        "Materiales compuestos",
        "Espuma y aislamiento",
        "Aplicaciones de materiales mixtos",
        "Materiales de exhibición y eventos",
        "Materiales de empaque y envío",
        "Elementos decorativos y utilería",
      ],
      packaging: [
        "Envases: 5, 10 y 20 litros",
        "Bolsas: 25 kg en polvo (para dilución)",
        "Granel: cantidades personalizadas disponibles",
      ],
      certifications: [
        "Certificado según estándares internacionales:",
        "UL 94",
        "ASTM E84",
        "ISO 9705",
        "EN 13501-1",
      ],
      chemicalPresentation: "Disponible en forma líquida lista para usar o polvo concentrado para dilución. El formato en polvo proporciona máxima flexibilidad y rentabilidad para aplicaciones a gran escala. Relación de dilución: 1 parte de polvo a 4 partes de agua.",
    },
  },
  {
    id: "minit-building",
    nameKey: "products.building.name",
    descKey: "products.building.desc",
    image: "https://images.unsplash.com/photo-1666285571949-3ee1a4946059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmaXJlJTIwcHJvdGVjdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczNjk5MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    categoryEn: "Building Protection",
    categoryEs: "Protección Edificios",
    detailsEn: {
      about: "MiniT Building is a professional-grade fire retardant specifically engineered for construction and structural applications. This high-performance Class A fire retardant provides exceptional protection for building materials, helping to meet stringent building codes and fire safety regulations. The formula creates a durable protective coating that withstands environmental conditions while maintaining fire resistance.",
      uses: [
        "Structural wood and timber",
        "Drywall and gypsum board",
        "Roof decking and sheathing",
        "Interior walls and partitions",
        "Ceiling materials",
        "Construction lumber",
        "Architectural elements",
      ],
      packaging: [
        "Bags: 25 kg powder",
        "Containers: 10 and 20 liters",
        "Bulk: 200-liter drums and totes",
      ],
      certifications: [
        "ASTM E119",
        "UL 263",
        "NFPA 255",
        "ICC-ES approved",
        "Meets IBC requirements",
      ],
      chemicalPresentation: "Professional-grade powder formulation for maximum coverage and economy. Mix with water at job site for immediate use. Coverage: approximately 4-6 square meters per liter depending on substrate porosity. Two-coat application recommended for optimal protection.",
    },
    detailsEs: {
      about: "MiniT Edificios es un retardante de fuego de grado profesional específicamente diseñado para aplicaciones de construcción y estructurales. Este retardante de fuego Clase A de alto rendimiento proporciona protección excepcional para materiales de construcción, ayudando a cumplir con estrictos códigos de construcción y regulaciones de seguridad contra incendios. La fórmula crea un recubrimiento protector duradero que resiste condiciones ambientales mientras mantiene la resistencia al fuego.",
      uses: [
        "Madera estructural y vigas",
        "Paneles de yeso y cartón yeso",
        "Cubiertas de techo y revestimiento",
        "Paredes interiores y divisiones",
        "Materiales de cielo raso",
        "Madera de construcción",
        "Elementos arquitectónicos",
      ],
      packaging: [
        "Bolsas: 25 kg en polvo",
        "Envases: 10 y 20 litros",
        "Granel: tambores de 200 litros y totes",
      ],
      certifications: [
        "Certificado según normas de construcción:",
        "ASTM E119",
        "UL 263",
        "NFPA 255",
        "Aprobado por ICC-ES",
        "Cumple requisitos IBC",
      ],
      chemicalPresentation: "Formulación en polvo de grado profesional para máxima cobertura y economía. Mezcle con agua en el sitio de trabajo para uso inmediato. Cobertura: aproximadamente 4-6 metros cuadrados por litro dependiendo de la porosidad del sustrato. Se recomienda aplicación de dos capas para protección óptima.",
    },
  },
];
