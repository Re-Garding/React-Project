import React from 'react';

export default class Count extends React.Component {

    Counter() {
    const [countTotal, setCountTotal] = React.useState(0);
    const [incrementTotal, setIncrementTotal] = React.useState(1)
    
    function addOne() {
        setCountTotal(countTotal + incrementTotal);
    }
    function subtractOne() {
        setCountTotal(countTotal - incrementTotal)
    }

    function increaseIncrement() {
        setIncrementTotal(incrementTotal + 1)
    }
    function decreaseIncrement() {
        setIncrementTotal(incrementTotal - 1)
    }
    render () {
    return (
        <div>
            <h3>Counter App</h3>
                <div id='totalCount'>
                    {countTotal}
                </div>
                    <br></br>
                <button type="button" onClick={addOne}>
                    Add {incrementTotal}
                </button>
                <button type="button" onClick={subtractOne}>
                    Subtract {incrementTotal}
                </button>
                <br></br>
                <br></br>
                <div>
                    increment counts by:
                </div>
                <div id="increment">
                    {incrementTotal}
                </div>
                <button onClick={decreaseIncrement}>
                    increment down
                </button>
                <button onClick={increaseIncrement}>
                    increment up
                </button>
        </div>

    );
}}}