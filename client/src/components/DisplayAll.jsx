import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const DisplayAll = (props) => {
    const [allPlayersList, setAllPlayersList] = useState([])
    const Navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8000/players/list")
            .then((res) => {
                console.log("FRONT END GET ALL", res);
                console.log('FRONT END GET ALL res data', res.data);
                setAllPlayersList(res.data)
            })
            .catch(err => console.log("Something went wrong FRONT END GET ALL", err))
    }, []);
    const deleteHandler = (playerID) => {
        axios.delete(`http://localhost:8000/delete/player/${playerID}`)

            .then((res) => {
                console.log("FRONT END DELETE RES", res);
                console.log("FRONT END RES DATA", res.data);
                const removeFormDom = (playerID) => {
                    allPlayersList.filter(player => player._id !== playerID)
                };
                removeFormDom(playerID);


            })
            .catch((err) => {
                console.log("Something went wrong  FRONT END DELETE", err.response);
            });
    }



    return (
        <div>
            <div class='row'>
                <div className='row justify-content-center'>
                    <div className="row">
                        <form className="col-md-4 offset-1" >
                            <h1> Manage Players | Manage Player Status</h1>
                            <h3> List | <Link to={"/create/players"}> Add Player </Link></h3>
                            <h3 className='.text-primary-emphasis'> We have quotes by: </h3>
                            <table class="table table-striped table-hover table-bordered table-sm table-warning border-info">
                                <thead>

                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Team Name</th>
                                        <th scope="col">Preferred Position </th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {allPlayersList.map((player, index) =>
                                        <tr key={player._id}>
                                            <th scope="row">{index}</th>


                                            <td className='text-decoration-underline text-primary'>{player.name}</td>
                                            <td>{player.position}</td>
                                            <td>
                                                <button className='btn btn-link' onClick={(e) => deleteHandler(player._id)}> Delete</button>
                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>
                        </form>


                    </div>

                </div>
            </div>



        </div>
    )
}


export default DisplayAll