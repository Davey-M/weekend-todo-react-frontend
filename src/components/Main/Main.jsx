import Container from '../Container/Container'

function Main() {

    let stagingAreaNotes = [
        'This is a note',
        'This is a second note',
        'This is yet another note',
    ]

    return (
        <main>
            <div className="left">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add</button>
                <div className="stagingArea">
                    <Container name="Staging Area" notes={ stagingAreaNotes }/>
                </div>
            </div>
            <div className="right">
                <Container name="First Container" notes={ [ 'Just one note here' ] }/>
                <Container name="Second Container" notes={ [] }/>
                <Container name="Third Container" notes={ [ 'Just one note here' ] }/>

                <div className="containerForm">
                    <input type="text" placeholder='Container Name'/>
                    <button>Add Container</button>
                </div>
            </div>
        </main>
    )
}

export default Main;

function StagingArea() {

}