const Content = (props) =>{

    return(
        <>
          {/* <p>{part[name]} {props.exercises}</p> */}

          {(props.parts).map(part => (
            <p>{part.name} {part.exercises}</p>
          ))}
          

        </>
    )
}
export default Content