import React, { useRef, useState } from "react";
import { BlockI } from "../App";
// Props
export type PaginaProps = {
  Blocks: BlockI[];
  setBlocks: any;
  BloqueActual: React.MutableRefObject<any>;
  alto: number;
  ancho: number;
  margenSuperior: number;
  margenInferior: number;
  margenIzquierda: number;
  margenDerecha: number;
};

// Componente de la hoja
const Pagina = ({
  alto,
  ancho,
  margenSuperior,
  margenInferior,
  margenDerecha,
  margenIzquierda,
  Blocks,
  setBlocks,
  BloqueActual,
}: PaginaProps): JSX.Element => {
  // Añade un nuevo bloque
  const añadirNuevoBloque = () => {
    // Crea un nuevo bloque vacío
    const nuevoBloque: BlockI = {
      justify: "text-left",
      id: Blocks.length,
      tag: "p",
      content: ".",
      ref: React.createRef(),
    };
    // Lo guarda en el array de bloques
    setBlocks(() => [...Blocks, nuevoBloque]);
    // Se actualiza el Bloque actual
    BloqueActual.current = nuevoBloque;
  };

  // Maneja cada vez que se presiona una tecla
  const handleKeyDown = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      añadirNuevoBloque();
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // let x = window.getSelection();
    // BloqueActual.current = x;
  };

  return (
    <div
      className="mx-auto my-2 overflow-y-hidden bg-white rounded-sm shadow-lg"
      style={{
        height: `${alto}px`,
        width: `${ancho}px`,
        paddingTop: `${margenSuperior}px`,
        paddingLeft: `${margenIzquierda}px`,
        paddingBottom: `${margenInferior}px`,
        paddingRight: `${margenDerecha}px`,
      }}
      contentEditable={true}
      onKeyDown={(e) => handleKeyDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
    >
      {Blocks.map((element, key) => (
        <Elemento
          tag={element.tag}
          innerRef={element.ref}
          key={key}
          contenido={element.content}
          id={element.id}
          Blocks={Blocks}
          BloqueActual={BloqueActual}
        />
      ))}
    </div>
  );
};

interface ElementoProps {
  id: number;
  tag?: string;
  innerRef: any;
  contenido: any;
  href?: string;
  BloqueActual: any;
  Blocks: any;
}

const Elemento = ({
  tag = "p",
  href = "",
  innerRef,
  contenido,
  Blocks,
  BloqueActual,
  id,
}: ElementoProps) => {
  const handleChangeBloqueActual = () => {
    alert("estas delicioso");
    console.log(id);

    BloqueActual.current = Blocks[id];
  };

  if (tag === "p")
    return (
      <p ref={innerRef} onClick={() => handleChangeBloqueActual()}>
        {contenido}
      </p>
    );
  if (tag === "li") return <li ref={innerRef}>{contenido}</li>;
  if (tag === "h1") return <h1 ref={innerRef}>{contenido}</h1>;
  if (tag === "h2") return <h2 ref={innerRef}>{contenido}</h2>;
  if (tag === "h3") return <h3 ref={innerRef}>{contenido}</h3>;
  if (tag === "h4") return <h4 ref={innerRef}>{contenido}</h4>;
  if (tag === "h5") return <h5 ref={innerRef}>{contenido}</h5>;
  if (tag === "h6") return <h6 ref={innerRef}>{contenido}</h6>;
  if (tag === "a")
    return (
      <a ref={innerRef} href={href}>
        {contenido}
      </a>
    );
  if (tag === "h4") return <h4 ref={innerRef}>{contenido}</h4>;
  return <></>;
};

export default Pagina;
