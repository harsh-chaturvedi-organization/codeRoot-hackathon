export const Navigator = () => {

    
    const usenavigator = () => {

        const success = (position) => {
            console.log(position)
        }
        const error = () => {
            console.log("error finding")
        }

        navigator.geolocation.getCurrentPosition(success, error)
    } 

    return (
        <div>
            <h1></h1>
            <button onClick={()=>usenavigator()}>find my state</button>
        </div>
    )
}