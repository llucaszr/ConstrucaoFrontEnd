function InputMatricula(){
    return (
        <>
        <form
        <label htmlFor="matricula">Matrícula</label>
        <input
          type="number"
          id="matricula"
          name="matricula"
          onChange={(e) => {
            setMatricula(e.target.value);
            setMatriculaErro("");
          }}
        />
        <p>{matriculaErro}</p>
        </>
    )
}

export default InputMatricula