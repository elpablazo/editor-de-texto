import { PaginaProps } from "./Pagina";
// Libraries
import useDynamicRefs from "use-dynamic-refs";
import React, { useEffect, useRef, useState } from "react";

interface BlockI {
  element: JSX.Element;
  ref: any;
}

const Content = ({
  alto,
  ancho,
  margenSuperior,
  margenInferior,
  margenDerecha,
  margenIzquierda,
}: PaginaProps) => {
  // Aquí se guardan todos los elementos (o bloques) con uno inicializado
  const [Blocks, setBlocks] = useState<BlockI[]>([
    {
      element: <React.Fragment></React.Fragment>,
      ref: React.createRef(),
    },
  ]);
  // Bloque seleccionado actualmente
  const BloqueActual = useRef<any>();

  // Maneja cada vez que se presiona una tecla
  const handleKeyDown = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    if (e.key === "Enter") {
      añadirNuevoBloque();
    }
  };

  // Añade un nuevo bloque
  const añadirNuevoBloque = () => {
    // Crea un nuevo bloque vacío
    const nuevoBloque: BlockI = {
      element: <React.Fragment></React.Fragment>,
      ref: React.createRef(),
    };
    // Lo guarda en el array de bloques
    setBlocks(() => [...Blocks, nuevoBloque]);
  };

  return (
    <div
      contentEditable={true}
      className="absolute"
      style={{ height: `${alto}px`, width: `${ancho}px` }}
      onKeyDown={(e) => handleKeyDown(e)}
    >
      {Blocks.map((element, key) => (
        <Elemento
          innerRef={element.ref}
          BloqueActual={BloqueActual}
          key={key}
          contenido={element.element}
          BlocksLength={Blocks.length}
        />
      ))}
    </div>
  );
};

interface ElementoProps {
  innerRef: any;
  BloqueActual: any;
  contenido: any;
  key: number;
  BlocksLength: number;
}

const Elemento = ({
  innerRef,
  BloqueActual,
  contenido,
  key,
  BlocksLength,
}: ElementoProps) => {
  return (
    <p ref={innerRef} onClick={() => (BloqueActual.current = innerRef)}>
      {BlocksLength}
    </p>
  );
};

export default Content;
