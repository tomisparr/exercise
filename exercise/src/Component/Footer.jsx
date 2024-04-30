const Footer = (props) => {
    const TotalExercises = (props.parts).reduce((total, part) => total + part.exercises, 0)

    return (
              
         <p>
            Number of exercises {TotalExercises};
            </p>
        
        
        

    )
}
export default Footer 