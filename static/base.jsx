function Counter() {
    const [countTotal, setCountTotal] = React.useState(0);

    function addOne() {
        setCountTotal(countTotal + 1);
    }
    function subtractOne() {
        setCountTotal(countTotal - 1)
    }

    return (
        <div>
            <h1>Hello World</h1>
                <div id='totalCount'>{countTotal}
                <br></br>
                    <button type="button" onClick={addOne}>
                        Add One
                    </button>
                </div>
        </div>

    );
}


ReactDOM.render(<Counter />, document.querySelector('#base'));
