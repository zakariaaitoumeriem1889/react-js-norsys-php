import React, {useState} from "react";
import {Button, FormControl, InputGroup} from "react-bootstrap";

const BookSearch = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState('');

    const divStyle = {
        marginTop: '20px'
    };

    const changeTitle = (event) => {
        setSearchValue(event.target.value);
    }

    const searchBook = () => {
        onSearch(searchValue);
    }

    return (
        <div className="input-group mb-3" style={divStyle}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Book Search"
                    aria-label="Book Search"
                    aria-describedby="basic-addon2"
                    value={searchValue}
                    onChange={changeTitle}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={searchBook}>
                        Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default BookSearch;