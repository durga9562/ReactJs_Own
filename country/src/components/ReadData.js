import React, { Component } from 'react'
import CountryService from '../services/CountryService'
import "./ReadData.css";

class ReadData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        CountryService.getCountries().then((res) => {
            this.setState({ countries: res.data })
        })
    }

    render() {
        return (
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>CountryId</th>
                            <th>CountryName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.countries.map(
                            country =>
                                <tr key={country.country_id}>

                                    <td>{country.country_id}</td>
                                    <td>{country.country_name}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ReadData