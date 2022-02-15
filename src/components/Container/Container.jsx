function Container(props) {

    console.log(props.notes);

    return (
        <div className="container">
            <h1>{ props.name }</h1>
            <button>Delete</button>
            <div className="note-container">
                {props.notes.map((item, index) => {
                    return (
                        <div className="note" key={ index }>
                            <p>{ item }</p>
                            <div className="buttonContainer">
                                <button>Complete</button>
                                <div className="gap"></div>
                                <button>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Container;