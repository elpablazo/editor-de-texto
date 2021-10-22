// Props de la toolbar
type ToolbarProps = {
  Blocks: any;
  setBlocks: any;
  BloqueActual: React.MutableRefObject<any>;
};

// Componente
const Toolbar = ({ BloqueActual, setBlocks, Blocks }: ToolbarProps) => {
  // Esta función permite actualizar bloques
  const actualizarBloqueClassName = (
    id: number,
    propiedad: string,
    cambio: string
  ) => {
    // Obtenemos el bloque
    let nuevoBloque = Blocks[id];

    if (propiedad === "className") {
      console.log(nuevoBloque);

      // Se guarda la clase que ya se tiene
      let nuevoClassName = nuevoBloque.ref.current.className;

      // Si ya se tiene, se intercambia, si no, se incluye.
      if (nuevoBloque.ref.current.className.includes(cambio)) {
        nuevoClassName = nuevoClassName.replace(cambio, "");
        nuevoBloque.ref.current.className = nuevoClassName;
      } else {
        nuevoBloque.ref.current.className += " " + cambio;
      }
    }

    setBlocks((values: any) =>
      values.map((value: any, i: any) => (i === id ? nuevoBloque : value))
    );
  };

  const ActualizarBloqueEtiqueta = (id: number, tag: string) => {
    // Obtenemos el bloque
    let nuevoBloque = Blocks[id];

    // Se cambia la tag del bloque
    nuevoBloque.tag = tag;

    // Se actualiza la lista de bloques
    setBlocks((values: any) =>
      values.map((value: any, i: any) => (i === id ? nuevoBloque : value))
    );
  };

  return (
    <div className="fixed top-0 left-0 z-10 flex flex-row justify-center w-screen py-2 space-x-2 text-xl text-white bg-green-500 shadow-xl ">
      {/*SECTION  Estilo  */}
      <select
        name="Estilo"
        id="Estilo"
        className="w-32 px-2 text-sm transition-all bg-green-500 rounded outline-none cursor-pointer hover:bg-green-700"
      >
        <option value="H1" selected>
          Encabezado 1
        </option>
        <option value="H2">Encabezado 2</option>
        <option value="H3">Encabezado 3</option>
        <option value="H4">Encabezado 4</option>
        <option value="H5">Encabezado 5</option>
        <option value="H6">Encabezado 6</option>
        <option value="p">Normal</option>
      </select>
      {/* !SECTION ESTILO */}

      <div className="border-l-2 border-green-600"></div>

      {/* SECTION Letra */}
      <select
        name="Estilo"
        id="Estilo"
        className="w-32 px-2 text-sm transition-all bg-green-500 rounded outline-none cursor-pointer hover:bg-green-700"
      >
        <option value="H1" selected>
          Arial
        </option>
        <option value="H2">Calibri</option>
        <option value="H3">Consolas</option>
      </select>
      <input
        type="number"
        defaultValue={20}
        name="Estilo"
        id="Estilo"
        className="w-20 px-2 text-sm transition-all bg-green-500 rounded outline-none cursor-pointer hover:bg-green-700"
      />

      {/* !SECTION Letra */}

      <div className="border-l-2 border-green-600"></div>

      {/* SECTION Negritas, italica, subrayado */}
      <ul className="flex flex-row justify-center text-center list-none">
        <li>
          <i
            className="px-1 transition-all rounded-sm cursor-pointer bi bi-type-bold hover:bg-green-700"
            onClick={() =>
              actualizarBloqueClassName(
                BloqueActual.current.id,
                "className",
                "font-bold"
              )
            }
          ></i>
        </li>
        <li>
          <i
            className="px-1 transition-all rounded-sm cursor-pointer bi bi-type-italic hover:bg-green-700"
            onClick={() =>
              actualizarBloqueClassName(
                BloqueActual.current.id,
                "className",
                "italic"
              )
            }
          ></i>
        </li>
        <li>
          <i
            className="px-1 transition-all rounded-sm cursor-pointer bi bi-type-underline hover:bg-green-700"
            onClick={() =>
              actualizarBloqueClassName(
                BloqueActual.current.id,
                "className",
                "underline"
              )
            }
          ></i>
        </li>
      </ul>
      {/* !SECTION Negritas, italica, subrayado */}

      <div className="border-l-2 border-green-600"></div>

      {/* SECTION Formato párrafo */}
      <ul className="flex flex-row justify-center text-center list-none">
        <li>
          <i
            className="px-1 transition-all rounded-sm cursor-pointer bi bi-text-left hover:bg-green-700"
            onClick={() =>
              actualizarBloqueClassName(
                BloqueActual.current.id,
                "className",
                "text-left"
              )
            }
          ></i>
        </li>
        <li>
          <i
            className="px-1 transition-all rounded-sm cursor-pointer bi bi-text-center hover:bg-green-700"
            onClick={() =>
              actualizarBloqueClassName(
                BloqueActual.current.id,
                "className",
                "text-center"
              )
            }
          ></i>
        </li>
        <li>
          <i
            className="px-1 transition-all rounded-sm cursor-pointer bi bi-text-right hover:bg-green-700"
            onClick={() =>
              actualizarBloqueClassName(
                BloqueActual.current.id,
                "className",
                "text-right"
              )
            }
          ></i>
        </li>
        <li>
          <i
            className="px-1 transition-all rounded-sm cursor-pointer bi bi-justify hover:bg-green-700"
            onClick={() =>
              actualizarBloqueClassName(
                BloqueActual.current.id,
                "className",
                "text-justify"
              )
            }
          ></i>
        </li>
      </ul>
      {/* !SECTION Formato párrafo */}

      <div className="border-l-2 border-green-600"></div>

      {/* SECTION Listas */}
      <ul className="flex flex-row justify-center text-center list-none">
        <li>
          <i className="px-1 transition-all rounded-sm cursor-pointer bi bi-list-check hover:bg-green-700"></i>
        </li>
        <li>
          <i className="px-1 transition-all rounded-sm cursor-pointer bi bi-list-ul hover:bg-green-700"></i>
        </li>
        <li>
          <i
            className="px-1 transition-all rounded-sm cursor-pointer bi bi-list-ol hover:bg-green-700"
            onClick={() => {
              ActualizarBloqueEtiqueta(BloqueActual.current.id, "li");
            }}
          ></i>
        </li>
      </ul>
      {/* !SECTION Listas */}
    </div>
  );
};

export default Toolbar;
