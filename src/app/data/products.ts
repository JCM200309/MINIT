export interface Product {
  id: string;
  nameKey: string;
  descKey: string;
  image: string;
  categoryEn: string;
  categoryEs: string;
  technicalSheet: string;
  certificateSheet: string;
  safetySheet: string;
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
  buyOnline?: string;
}

export const products: Product[] = [
  {
    id: "MINIT-wood",
    nameKey: "products.wood.name",
    descKey: "products.wood.desc",
    image: "/Bidones/maderas.png",
    categoryEn: "Wood Protection",
    categoryEs: "Protección de Madera",
    technicalSheet: "/_files/ugd/a6f64e_fe6fa83310c94891a0e1eb536b2680c9.pdf",
    certificateSheet: "/_files/ugd/a6f64e_9463d6f04a474d90aad59e3c5611d105.pdf",
    safetySheet: "/_files/ugd/a6f64e_419101391f5049dd8286218ebbdabfc3.pdf",
    buyOnline: "https://listado.mercadolibre.com.ar/pagina/MINITignifugos/?item_id=MLA1127759488&category_id=MLA413242&client=recoview-selleritems&recos_listing=true",
    detailsEn: {
      about: "<strong>MINIT Woods</strong> is a <strong>Class A</strong> fire retardant and wood preservative made from natural salts. This non toxic product, colorless and odorless, penetrates deeply without altering the material's natural color or texture. <br> Besides preventing ignition and fire spread, it <strong>reduces smoke and toxic gas</strong> emissions by up to 70%. Being <strong>100% biodegradable, non-toxic, and pet-friendly</strong>, it is the safest, eco-friendly solution for protecting wood, cellulose, and composite structures.<br> When used on wood, it also prevents the presence of <strong>fungi</strong>, <strong>bacteria</strong> and <strong>insects</strong> (moths and termites).",
      uses: [
        "Wood",
        "Cardboard",
        "Straw",
        "Paper",
        "MDF",
        "OSB",
        "Agglomerate"
      ],
      packaging: [
        "Bags: 25 kg",
        "Containers: 5 and 10 liters",
      ],
      certifications: [
        "National institute of tecnology and industry (INTI)",
        "IRAM 11910-3",
        "NBR 9442:1986",
        "ASTM E 162:1994",
      ],
      chemicalPresentation: "The chemical comes in a powder inside a bag with the exact amount for its dilution with regular water until the bag is completely filled. (The bag should not be diluted more than indicated on the bag, as it will lose its fire retardant properties).",
    },
    detailsEs: {
      about: "<strong>MINIT maderas</strong> es un retardante de fuego <strong>Clase A</strong> y preservador a base de sales naturales. Este producto no tóxico, incoloro e inodoro, penetra sin alterar la textura o color del material. <br> Además de prevenir la ignición y propagación del fuego, reduce la emisión de <strong> humos y gases tóxicos </strong>hasta un 70%. Al ser <strong>100% biodegradable, no tóxico y pet-friendly</strong>, es la solución ecológica ideal para proteger madera, celulosa y derivados. <br> En el caso del uso en madera, también previene la presencia de <strong>hongos</strong>, <strong>bacterias</strong> e <strong>insectos</strong> (polillas y termitas).",
      uses: [
        "Maderas",
        "Cartón",
        "Paja",
        "Papel",
        "MDF",
        "OSB",
        "Aglomerados",
      ],
      packaging: [
        "Granel: bolsas de 25 kg.",
        "Bidón: 5 y 10 litros.",
      ],
      certifications: [
        " Instituto Nacional de Tecnología e Industria (INTI)",
        "IRAM 11910-3",
        "NBR 9442:1986",
        "ASTM E 162:1994",
      ],
      chemicalPresentation: "El químico se presenta en polvo dentro de un envase con la cantidad justa para su dilución con agua regular hasta completar el envase. (No se debe diluir más de lo indicado por el envase, ya que perderá sus propiedades retardantes).",
    },
  },
  {
    id: "MINIT-textile",
    nameKey: "products.textile.name",
    descKey: "products.textile.desc",
    image: "/Bidones/textiles.png",
    categoryEn: "Textile Protection",
    categoryEs: "Protección Textil",
    technicalSheet: "/_files/ugd/a6f64e_15a3d525c37e4ecabed564684280507c.pdf",
    certificateSheet: "/_files/ugd/a6f64e_e764055b184d4052a47c68eaa788e818.pdf",
    safetySheet: "/_files/ugd/a6f64e_71a9f25e031f45b1ad53fc366461864c.pdf",
    buyOnline: "https://listado.mercadolibre.com.ar/pagina/MINITignifugos/?item_id=MLA1127759488&category_id=MLA413242&client=recoview-selleritems&recos_listing=true",
    detailsEn: {
      about: "<strong>MINIT Textile</strong> is a <strong>Class A </strong>fire retardant made from natural salts. It is a colorless, odorless, and non-toxic liquid featuring highly absorbent active penetrating agents, providing <strong>highly effective fire-inhibiting protection</strong>.<br> It prevents fire spread and <strong>reduces smoke and gas generation by up to 70%</strong>. It does not alter the toxicity of the smoke; rather, it decreases the overall amount of smoke by suppressing the fire. <br> The product is <strong>100% biodegradable, non-toxic, and pet-friendly</strong>, offering the safest, eco-friendly solution for protecting fabrics.",
      uses: [
        "Natural and synthetic fabrics",
        "Curtains and drapes",
        "Upholstery and furniture",
        "Theater and stage curtains",
        "Hotel and hospitality textiles",
        "Protective clothing and workwear",
      ],
      packaging: [
        "Containers: 5 and 10 liters",
        "Bulk: 25 kg",
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
      about: "<strong>MINIT Textil</strong> es un retardante de fuego <strong>Clase A</strong> elaborado a partir de sales naturales. Es un líquido incoloro, inodoro y no tóxico que cuenta con agentes activos, dispersantes y penetrantes completamente absorbentes, ofreciendo una <strong>protección inhibidora de fuego de alta efectividad</strong>.<br> Evita la propagación del fuego y <strong>reduce la generación de humo y gases hasta un 70%</strong>. No modifica la toxicidad del humo del material tratado, sino que disminuye su cantidad al reducir el fuego. <br> El producto es <strong>100% biodegradable, no tóxico y pet-friendly</strong>, ofreciendo la solución más segura y ecológica para la protección de telas.",
      uses: [
        "Telas naturales y sintéticas",
        "Cortinas y cortinados",
        "Tapicería y muebles",
        "Cortinas de teatro y escenario",
        "Textiles para hoteles y hospitalidad",
        "Ropa protectora y de trabajo",
      ],
      packaging: [
        "Envases: 5 y 10 litros",
        "Granel: 25 kg",
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
    id: "MINIT-total",
    nameKey: "products.total.name",
    descKey: "products.total.desc",
    image: "/Bidones/total.png",
    categoryEn: "total Protection",
    categoryEs: "Protección TOTAL",
    technicalSheet: "/_files/ugd/a6f64e_fe6fa83310c94891a0e1eb536b2680c9.pdf",
    certificateSheet: "/_files/ugd/a6f64e_9463d6f04a474d90aad59e3c5611d105.pdf",
    safetySheet: "/_files/ugd/a6f64e_419101391f5049dd8286218ebbdabfc3.pdf",
    buyOnline: "https://listado.mercadolibre.com.ar/pagina/MINITignifugos/?item_id=MLA1127759488&category_id=MLA413242&client=recoview-selleritems&recos_listing=true",
    detailsEn: {
      about: "<strong>MINIT Total</strong> is a <strong>Class A </strong>fire retardant made from natural salts. It is a colorless, odorless, and non-toxic liquid featuring highly absorbent active penetrating agents, providing <strong>highly effective fire-inhibiting protection</strong>.<br> It prevents fire spread and <strong>reduces smoke and gas generation by up to 70%</strong>. It does not alter the toxicity of the smoke; rather, it decreases the overall amount of smoke by suppressing the fire. <br> The product is <strong>100% biodegradable, non-toxic, and pet-friendly</strong>, offering the safest, eco-friendly solution for protecting for all types of materials.",
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
        "Containers: 1, 5 and 10 liters",
        "Bulk: 25 kg powder",
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
      about: "<strong>MINIT Total</strong> es un retardante de fuego <strong>Clase A</strong> elaborado a partir de sales naturales. Es un líquido incoloro, inodoro y no tóxico que cuenta con agentes activos, dispersantes y penetrantes completamente absorbentes, ofreciendo una <strong>protección inhibidora de fuego de alta efectividad</strong>.<br> Evita la propagación del fuego y <strong>reduce la generación de humo y gases hasta un 70%</strong>. No modifica la toxicidad del humo del material tratado, sino que disminuye su cantidad al reducir el fuego. <br> El producto es <strong>100% biodegradable, no tóxico y pet-friendly</strong>, ofreciendo la solución más segura y ecológica para la protección de todo tipo de materiales.",
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
        "Envases: 1, 5 y 10 litros",
        "Granel: Bolsas de 25 kg en polvo",

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
    id: "MINIT-Pinturas",
    nameKey: "products.paintings.name",
    descKey: "products.paintings.desc",
    image: "/Bidones/pinturas.png",
    categoryEn: "Painting Protection",
    categoryEs: "Protección de Pinturas",
    technicalSheet: "/_files/ugd/a6f64e_89045a73c2724135afe20e709cf11514.pdf",
    certificateSheet: "/_files/ugd/a6f64e_8c3603ac62e748c3969e6f808cf8b259.pdf",
    safetySheet: "/_files/ugd/a6f64e_940db778f0e744e89f968adfd5f29868.pdf",
    buyOnline: "https://listado.mercadolibre.com.ar/pagina/MINITignifugos/?item_id=MLA1127759488&category_id=MLA413242&client=recoview-selleritems&recos_listing=true",
    detailsEn: {
      about: "<strong>MINIT FR936 Fire Retardant, Thermal Insulator, and Intumescent Additive</strong> is a transparent, water-based product. It can be applied as an additive to any water-soluble paint or coating (preferably water-based enamel or latex), turning them into a <strong>highly effective fire retardant and thermal insulator</strong>.<br> It delays fire propagation and produces low thermal conductivity. In the presence of fire, it acts as a thermal insulating barrier with low intumescence that, thanks to its refractory nano-particles, <strong>resists temperatures up to 960ºC</strong>. Additionally, its fire-retardant action decreases smoke emission.",
      uses: [
        "Wood, iron, and metals",
        "All types of metal sheets",
        "Floors, columns, and ceilings",
        "Furniture",
        "Scenery and stages"
      ],
      packaging: [
        "Bottle: 1 liter (powder for hydration)",
        "Container: 5 liters (powder for hydration)"
      ],
      certifications: [
        "Classifications: Class A, Level 1 and Class RE2",
        "IRAM 11910-3:1994 / IRAM-INTI-CIT G 7577",
        "NBR 9442:1986 / ASTM E162:1994",
        "International Standards: ASTM E-119, UL 723, ISO 834, etc.",
        "Tested under radiant panel and vertical flammability methods",
        "Scientific studies endorsed by CONICET and ScienceDirect"
      ],
      chemicalPresentation: "Supplied as a powder to be hydrated inside the container. Mixing ratio: 1 liter of additive for every 4 liters of water-based paint (enamel or latex). Apply with a brush or roller on surfaces completely free of grease, rust, and dust. If using a spray gun, thin the prepared paint with water until the desired density is reached.",
    },
    detailsEs: {
      about: "<strong>El Aditivo Ignífugo, Aislante Térmico e Intumescente MINIT FR936</strong> es de base acuosa y transparente. Se aplica como aditivo en cualquier pintura o revestimiento soluble en agua (recomendable esmalte o látex al agua), convirtiéndolas en un <strong>retardante ignífugo y aislante térmico muy efectivo</strong>.<br> Demora la velocidad de propagación del fuego y produce una baja conductividad térmica. En presencia de fuego, actúa como una barrera aislante térmica con baja intumescencia que, gracias a sus nano-partículas refractarias, <strong>resiste temperaturas de hasta 960ºC</strong>. Además, su acción ignífuga disminuye la emisión de humos.",
      uses: [
        "Maderas, hierro y metales",
        "Todo tipo de chapas",
        "Pisos, columnas y techos",
        "Muebles",
        "Escenografías y escenarios"
      ],
      packaging: [
        "Botella: 1 litro (polvo para hidratar)",
        "Bidón: 5 litros (polvo para hidratar)"
      ],
      certifications: [
        "Clasificaciones: Clase A, Nivel 1 y Clase RE2",
        "IRAM 11910-3:1994 / IRAM-INTI-CIT G 7577",
        "NBR 9442:1986 / ASTM E162:1994",
        "Estándares internacionales: ASTM E-119, UL 723, ISO 834, etc.",
        "Análisis Cualitativo: No entra en ignición",
        "Estudios científicos avalados por CONICET y publicados en ScienceDirect"
      ],
      chemicalPresentation: "En polvo dentro del envase para hidratar. Mezcla: 1 litro de aditivo por cada 4 litros de pintura esmalte al agua (hidroesmalte) o látex, hasta quedar homogéneo. Se aplica con pincel o rodillo sobre superficies libres de grasas, óxido y polvo. Si va a usar soplete, diluya la mezcla con agua hasta alcanzar la densidad deseada.",
    },
  },
  {
    id: "MINIT-lacas",
    nameKey: "products.lacas.name",
    descKey: "products.lacas.desc",
    image: "/Bidones/aditivo.png",
    categoryEn: "Varnished Wood Protection",
    categoryEs: "Protección de Madera barnizada",
    technicalSheet: "/_files/ugd/a6f64e_fe6fa83310c94891a0e1eb536b2680c9.pdf",
    certificateSheet: "/_files/ugd/a6f64e_9463d6f04a474d90aad59e3c5611d105.pdf",
    safetySheet: "/_files/ugd/a6f64e_419101391f5049dd8286218ebbdabfc3.pdf",
    buyOnline: "https://listado.mercadolibre.com.ar/pagina/MINITignifugos/?item_id=MLA1127759488&category_id=MLA413242&client=recoview-selleritems&recos_listing=true",
    detailsEn: {
      about: "FALTA DESCRIPCION",
      uses: [
        "FALTA DESCRIPCION",
      ],
      packaging: [
        "FALTA DESCRIPCION",
      ],
      certifications: [
        "FALTA DESCRIPCION",
      ],
      chemicalPresentation: "F alta ",
    },
    detailsEs: {
      about: "FALTA DESCRIPCION",
      uses: [
        "FALTA DESCRIPCION",
      ],
      packaging: [
        "FALTA DESCRIPCION",
      ],
      certifications: [
        "FALTA DESCRIPCION",
      ],
      chemicalPresentation: "FALTA DESCRIPCION",
    },
  },
];
