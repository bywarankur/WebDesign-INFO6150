import "./app.css"

function Reorder({onReorder}) {
    return (
     
        <button className ="Reorder" onClick={onReorder}>
           Reorder
        </button>
        
    )
}
export default Reorder;