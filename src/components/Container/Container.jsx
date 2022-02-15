function Container(props) {

    console.log(props.notes);

    return (
        <div className="container">
            <h1>{ props.name }</h1>
            <div className="note-container">
                {props.notes.map((item, index) => {
                    return (
                        <div className="note" key={ index }>
                            <p>{ item }</p>
                            <div>
                                <button>Complete</button>
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