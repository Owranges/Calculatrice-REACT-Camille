import React, { Component } from "react";

class Keypad extends Component {
    render() {
        let myClick = this.props.onClick
        return (
            <div>
                <button name="(" onClick={(e) => myClick(e.target.name)}>
                    (
        </button>
                <button name="CE" onClick={(e) => myClick(e.target.name)}>
                    CE
        </button>
                <button name=")" onClick={(e) => myClick(e.target.name)}>
                    )
        </button>
                <button name="C" onClick={(e) => myClick(e.target.name)}>
                    C
        </button>
                <br />

                <button name="1" onClick={(e) => myClick(e.target.name)}>
                    1
        </button>
                <button name="2" onClick={(e) => myClick(e.target.name)}>
                    2
        </button>
                <button name="3" onClick={(e) => myClick(e.target.name)}>
                    3
        </button>
                <button name="+" onClick={(e) => myClick(e.target.name)}>
                    +
        </button>
                <br />

                <button name="4" onClick={(e) => myClick(e.target.name)}>
                    4
        </button>
                <button name="5" onClick={(e) => myClick(e.target.name)}>
                    5
        </button>
                <button name="6" onClick={(e) => myClick(e.target.name)}>
                    6
        </button>
                <button name="-" onClick={(e) => myClick(e.target.name)}>
                    -
        </button>
                <br />

                <button name="7" onClick={(e) => myClick(e.target.name)}>
                    7
        </button>
                <button name="8" onClick={(e) => myClick(e.target.name)}>
                    8
        </button>
                <button name="9" onClick={(e) => myClick(e.target.name)}>
                    9
        </button>
                <button name="*" onClick={(e) => myClick(e.target.name)}>
                    x
        </button>
                <br />

                <button name="." onClick={(e) => myClick(e.target.name)}>
                    .
        </button>
                <button name="0" onClick={(e) => myClick(e.target.name)}>
                    0
        </button>
                <button name="=" onClick={(e) => myClick(e.target.name)}>
                    =
        </button>
                <button name="/" onClick={(e) => myClick(e.target.name)}>
                    ÷
        </button>
                <br />
            </div>
        );
    }
}

export default Keypad;
