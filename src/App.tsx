import React, { useState, useRef, useEffect } from "react";
// Helpers
import { cmToPx } from "./helpers/unitConverter";

// Componentes
import Pagina, { PaginaProps } from "./components/Pagina";
import Toolbar from "./components/Toolbar";

export interface BlockI {
  id: number;
  tag?: string;
  justify: "text-left" | "text-center" | "text-right" | "text-justify";
  content: any;
  ref: any;
}

function App() {
  // Aquí se guardan todos los elementos (o bloques) con uno inicializado
  const [Blocks, setBlocks] = useState<BlockI[]>([
    {
      id: 0,
      tag: "p",
      justify: "text-left",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa temporibus est non, reprehenderit quidem, ipsa nihil harum veniam quae voluptate exercitationem voluptates aliquam! Porro fugiat dolore nesciunt ex debitis suscipit.",
      ref: React.createRef(),
    },
  ]);

  // Bloque seleccionado actualmente
  const BloqueActual = useRef<any>(Blocks[0]);

  // Configuraciones de la página
  const [ConfiguracionesPagina, setConfiguracionesPagina] =
    useState<PaginaProps>({
      Blocks: Blocks,
      setBlocks: setBlocks,
      BloqueActual: BloqueActual,
      alto: 1123,
      ancho: 794,
      margenSuperior: cmToPx(0.5),
      margenDerecha: cmToPx(2),
      margenInferior: cmToPx(2),
      margenIzquierda: cmToPx(2.5),
    });

  useEffect(() => {
    console.log(BloqueActual.current);
  }, [BloqueActual]);

  return (
    <div className="flex flex-row w-auto p-8 pt-10 overflow-auto text-center bg-gray-100">
      {/* <input
        type="number"
        id="MargenSuperior"
        step="0.5"
        min="0"
        onChange={(e) =>
          setConfiguracionesPagina({
            ...ConfiguracionesPagina,
            margenSuperior: cmToPx(parseFloat(e.target.value)) | 0,
          })
        }
        defaultValue={pxToCm(ConfiguracionesPagina.margenSuperior)}
      /> */}

      <Toolbar
        BloqueActual={BloqueActual}
        setBlocks={setBlocks}
        Blocks={Blocks}
      />

      <Pagina
        {...ConfiguracionesPagina}
        Blocks={Blocks}
        setBlocks={setBlocks}
        BloqueActual={BloqueActual}
      />
    </div>
  );
}

export default App;
