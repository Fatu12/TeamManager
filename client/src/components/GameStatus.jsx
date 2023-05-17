import React from 'react'
import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerStatus = (props) => {
    const { playerList, setPlayerList, stat, setStat, name, position } = props;
    const { num } = useParams();

    const handleUpdate = () => {

        axios.get('http://localhost:8000/api/players/list')
            .then((res) => {
                console.log(res.data)
                setPlayerList(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }




    const handleChange = (playId, e) => {
        console.log(e.target.innerText)

        setStat(e.target.innerText)
        axios.put(`http://localhost:8000/api/players/edit/${playId}`, {

            playerName: name,
            preferredPosition: position,
            playerStatus: stat
        })
            .then((res) => {
                console.log(res.data)
                handleUpdate();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='border border-dark w-75 mx-auto'>
            <h1>Player Status Game {num}</h1>
            <NavLink className='m-2' to='/players/status/game/1'>Game 1</NavLink>
            <NavLink className='m-2' to='/players/status/game/2'>Game 2</NavLink>
            <NavLink className='m-2' to='/players/status/game/3'>Game 3</NavLink>
            <table className='table table-striped w-75 border border-dark'>
                <thead>
                    <tr>
                        <th className='border border-dark' colSpan={1}>Player Name</th>
                        <th className='border border-dark' colSpan={3}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        playerList.map((item, index) => {
                            return <tr key={item._id} className='border border-dark'>
                                <td className='border border-dark'>{item.playerName}</td>

                                {
                                    item.playerStatus == 'Playing' ?
                                        <td><button className='btn btn-success'>Playing</button></td> :
                                        <td><button onClick={(e) => { handleChange(item._id, e) }}>Playing</button></td>

                                }
                                {
                                    item.playerStatus == 'Not Playing' ?
                                        <td><button className='btn btn-danger'>Not Playing</button></td> :
                                        <td><button onClick={(e) => { handleChange(item._id, e) }}>Not Playing</button></td>

                                }
                                {
                                    item.playerStatus == 'Undecided' ?
                                        <td><button className='btn btn-warning'>Undecided</button></td> :
                                        <td><button onClick={(e) => { handleChange(item._id, e) }}>Undecided</button></td>

                                }

                                {console.log(item.playerStatus)}
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default PlayerStatus;
