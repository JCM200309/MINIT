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
  affidavitSheet: string;
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
    technicalSheet: "/documentos/Maderas/fichaTecnicaMadera.pdf",
    certificateSheet: "/documentos/Maderas/certificadoMadera.pdf",
    safetySheet: "/documentos/Maderas/hojaSeguridadMadera.pdf",
    affidavitSheet: "/documentos/declaracionJurada.pdf",
    buyOnline: "https://www.mercadolibre.com.ar/pagina/minitignifugos#client=SEARCH&component_id=menu_home&component=menu_home&label=Inicio&tracking_id=4e609e7cdcf849750f9376d5069a6a19&global_position=1",
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
        "IRAM",
        "NFPA",
        "ASTM",
        "ISO",
      ],
      chemicalPresentation: "The impregnating chemical comes in powder form in a container with the precise amount needed for dilution with regular water until the container is full. The 25 kg powder format offers maximum flexibility and cost-effectiveness for large-scale applications. Dilution ratio: <strong>1 kg of powder to 10 liters of water</strong>.",
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
        "IRAM",
        "NFPA",
        "ASTM",
        "ISO",
      ],
      chemicalPresentation: "El químico impregnante se presenta en polvo dentro de un envase con la cantidad justa para su dilución con agua regular hasta completar el envase. El formato en polvo de 25 kg proporciona máxima flexibilidad y rentabilidad para aplicaciones a gran escala. Relación de dilución: <strong>1 kilo de polvo a 10 litros de agua</strong>.",
    },
  },
  {
    id: "MINIT-textile",
    nameKey: "products.textile.name",
    descKey: "products.textile.desc",
    image: "/Bidones/textiles.png",
    categoryEn: "Textile Protection",
    categoryEs: "Protección Textil",
    technicalSheet: "/documentos/Textiles/fichaTecnicaTextil.pdf",
    certificateSheet: "/documentos/Textiles/certificadoTextil.pdf",
    safetySheet: "/documentos/Textiles/hojaSeguridadTextil.pdf",
    affidavitSheet: "/documentos/declaracionJurada.pdf",
    buyOnline: "https://www.mercadolibre.com.ar/pagina/minitignifugos#client=SEARCH&component_id=menu_home&component=menu_home&label=Inicio&tracking_id=4e609e7cdcf849750f9376d5069a6a19&global_position=1",
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
        "IRAM",
        "NFPA",
        "ASTM",
        "ISO",
      ],
      chemicalPresentation: "The impregnating chemical comes in powder form in a container with the precise amount needed for dilution with regular water until the container is full. The 25 kg powder format offers maximum flexibility and cost-effectiveness for large-scale applications. Dilution ratio: <strong>1 kg of powder to 10 liters of water</strong>.",
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
        "IRAM",
        "NFPA",
        "ASTM",
        "ISO",
      ],
      chemicalPresentation: "El químico impregnante se presenta en polvo dentro de un envase con la cantidad justa para su dilución con agua regular hasta completar el envase. El formato en polvo de 25 kg proporciona máxima flexibilidad y rentabilidad para aplicaciones a gran escala. Relación de dilución: <strong>1 kilo de polvo a 10 litros de agua</strong>.",
    },
  },
  {
    id: "MINIT-total",
    nameKey: "products.total.name",
    descKey: "products.total.desc",
    image: "/Bidones/total.png",
    categoryEn: "total Protection",
    categoryEs: "Protección TOTAL",
    technicalSheet: "/documentos/Total/fichaTecnicaTotal.pdf",
    certificateSheet: "/documentos/Total/certificadoTotal.pdf",
    safetySheet: "/documentos/Total/hojaSeguridadTotal.pdf",
    affidavitSheet: "/documentos/declaracionJurada.pdf",
    buyOnline: "https://www.mercadolibre.com.ar/pagina/minitignifugos#client=SEARCH&component_id=menu_home&component=menu_home&label=Inicio&tracking_id=4e609e7cdcf849750f9376d5069a6a19&global_position=1",
    detailsEn: {
      about: "<strong>MINIT Total</strong> is a <strong>Class A </strong>fire retardant made from natural salts. It is a colorless, odorless, and non-toxic liquid featuring highly absorbent active penetrating agents, providing <strong>highly effective fire-inhibiting protection</strong>.<br> It prevents fire spread and <strong>reduces smoke and gas generation by up to 70%</strong>. It does not alter the toxicity of the smoke; rather, it decreases the overall amount of smoke by suppressing the fire. <br> The product is <strong>100% biodegradable, non-toxic, and pet-friendly</strong>, offering the safest, eco-friendly solution for protecting for all types of materials.",
      uses: [
        "Wood, Straw",
        "Paper, Cardboard",
        "MDF, OSB, Particleboard",
        "Natural and Synthetic Textiles",
        "Carpets, Upholstery",
        "Workwear",
        "Foam Panels"
      ],
      packaging: [
        "Containers: 1, 5 and 10 liters",
        "Bulk: 25 kg powder",
      ],
      certifications: [
        "IRAM",
        "NFPA",
        "ASTM",
        "ISO",
      ],
      chemicalPresentation: "The impregnating chemical comes in powder form in a container with the precise amount needed for dilution with regular water until the container is full. The 25 kg powder format offers maximum flexibility and cost-effectiveness for large-scale applications. Dilution ratio: <strong>1 kg of powder to 10 liters of water</strong>.",
    },
    detailsEs: {
      about: "<strong>MINIT Total</strong> es un retardante de fuego <strong>Clase A</strong> elaborado a partir de sales naturales. Es un líquido incoloro, inodoro y no tóxico que cuenta con agentes activos, dispersantes y penetrantes completamente absorbentes, ofreciendo una <strong>protección inhibidora de fuego de alta efectividad</strong>.<br> Evita la propagación del fuego y <strong>reduce la generación de humo y gases hasta un 70%</strong>. No modifica la toxicidad del humo del material tratado, sino que disminuye su cantidad al reducir el fuego. <br> El producto es <strong>100% biodegradable, no tóxico y pet-friendly</strong>, ofreciendo la solución más segura y ecológica para la protección de todo tipo de materiales.",
      uses: [
        "Maderas y Paja",
        "Papel Cartón",
        "MDF, OSB y Aglomerados",
        "Textiles naturales y sintéticos",
        "Alfombras y Tapizados",
        "Ropa de trabajo",
        "Paneles goma espuma"
      ],
      packaging: [
        "Envases: 1, 5 y 10 litros",
        "Granel: Bolsas de 25 kg en polvo",

      ],
      certifications: [
        "IRAM",
        "NFPA",
        "ASTM",
        "ISO",
      ],
      chemicalPresentation: "El químico impregnante se presenta en polvo dentro de un envase con la cantidad justa para su dilución con agua regular hasta completar el envase. El formato en polvo de 25 kgs proporciona máxima flexibilidad y rentabilidad para aplicaciones a gran escala. Relación de dilución: <strong>1 kilo de polvo a 10 litros de agua</strong>.",
    },
  },
  {
    id: "MINIT-Pinturas",
    nameKey: "products.paintings.name",
    descKey: "products.paintings.desc",
    image: "/Bidones/pinturas.png",
    categoryEn: "Painting Protection",
    categoryEs: "Protección de Pinturas",
    technicalSheet: "/documentos/Aditivo/fichaTecnicaAditivo.pdf",
    certificateSheet: "/documentos/Aditivo/certificadoAditivo.pdf",
    safetySheet: "/documentos/Aditivo/hojaSeguridadAditivo.pdf",
    affidavitSheet: "/documentos/declaracionJurada.pdf",
    buyOnline: "https://www.mercadolibre.com.ar/pagina/minitignifugos#client=SEARCH&component_id=menu_home&component=menu_home&label=Inicio&tracking_id=4e609e7cdcf849750f9376d5069a6a19&global_position=1",
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
        "IRAM",
        "NFPA",
        "ASTM",
        "ISO",
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
        "IRAM",
        "NFPA",
        "ASTM",
        "ISO",
      ],
      chemicalPresentation: "En polvo dentro del envase para hidratar. Mezcla: 1 litro de aditivo por cada 4 litros de pintura esmalte al agua (hidroesmalte) o látex, hasta quedar homogéneo. Se aplica con pincel o rodillo sobre superficies libres de grasas, óxido y polvo. Si va a usar soplete, diluya la mezcla con agua hasta alcanzar la densidad deseada.",
    },
  },
  {
    id: "MINIT-lacas",
    nameKey: "products.lacas.name",
    descKey: "products.lacas.desc",
    image: "/Bidones/aditivo.png",
    categoryEn: "Protection with Lacquers",
    categoryEs: "Protección con Lacas",
    technicalSheet: "/documentos/Laca/fichaTecnicaLaca.pdf",
    certificateSheet: "/documentos/Laca/certificadoLaca.pdf",
    safetySheet: "/documentos/Laca/hojaSeguridadLaca.pdf",
    affidavitSheet: "/documentos/declaracionJurada.pdf",
    buyOnline: "https://www.mercadolibre.com.ar/pagina/minitignifugos#client=SEARCH&component_id=menu_home&component=menu_home&label=Inicio&tracking_id=4e609e7cdcf849750f9376d5069a6a19&global_position=1",
    detailsEn: {
      about: "<strong>MINIT Hydro-lacquer Additive</strong> is a transparent, water-based product. It can be applied as an additive to any water-based lacquer, turning them into a <strong>highly effective fire retardant</strong>.<br> It delays fire propagation and produces low thermal conductivity, protecting the treated surface from the effects of fire. While it acts as an external protective coating, its fire-retardant action also significantly <strong>decreases smoke emissions</strong>.",
      uses: [
        "Wood surfaces",
        "Floors and Decks",
        "Columns and Roofs",
        "Furniture",
        "Sceneries and Stages"
      ],
      packaging: [
        "Containers: 1 and 5 liters (powder for hydration)"
      ],
      certifications: [
        "IRAM",
        "NFPA",
        "ASTM",
        "ISO",
      ],
      chemicalPresentation: "Supplied as a powder to be hydrated inside the container. Fill the container with regular water and shake until completely hydrated. Mixing ratio: <strong>1 liter of additive for every 4 liters of water-based lacquer</strong>. Apply with a brush or roller on surfaces completely free of grease, rust, and dust.",
    },
    detailsEs: {
      about: "El <strong>Aditivo Ignífugo MINIT para hidrolacas</strong> es un producto transparente y de base acuosa. Se aplica como aditivo para lacas al agua, convirtiéndolas en un <strong>retardante ignífugo muy efectivo</strong>.<br> Demora la velocidad de propagación del fuego y produce una baja conductividad térmica protegiendo la superficie tratada de la acción del fuego. Además de su excelente protección de recubrimiento superficial, su acción ignífuga <strong>disminuye notablemente la emisión de humos</strong>.",
      uses: [
        "Maderas",
        "Pisos",
        "Columnas y Techos",
        "Muebles",
        "Escenografías y Escenarios"
      ],
      packaging: [
        "Envases: Botellas de 1 litro y Bidones de 5 litros (polvo para hidratar)"
      ],
      certifications: [
        "IRAM",
        "NFPA",
        "ASTM",
        "ISO",
      ],
      chemicalPresentation: "Se presenta en polvo dentro del envase para hidratar. Completar con agua común el envase y agitar hasta que esté completamente hidratado. Mezcla: <strong>1 litro de aditivo por cada 4 litros de laca al agua (Hidrolaca)</strong>. Se aplica con pincel o rodillo sobre la superficie completamente libre de grasas, óxido y polvo.",
    },
  },
];
