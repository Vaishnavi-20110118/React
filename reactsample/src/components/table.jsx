import React from "react";
import './table.css';
export default function Table(){
    return(
        <div className="table1">
            <h1>Table</h1>
           <table>
        <tr>
            <th>Teams</th>
            <th>City</th>
            <th>Home ground</th>
            <th>Debut</th>
            <th>Owner</th>

        </tr>
        <tr>
            <td>Chennai Super Kings</td>
            <td>Chennai,Tamilnadu</td>
            <td>MA.Chidambaram Stadium</td>
            <td>2008</td>
            <td><ul>
                <li>N.Srinivasan</li>
            </ul></td>
        </tr>
        <tr>
            <td>Delhi Capitals</td>
            <td>New delhi,Delhi</td>
            <td>Arun Jaitly Stadium</td>
            <td>2001</td>
            <td><ul>
                <li>sajjan Jindal</li>
                <li>G.M.Rao</li>
            </ul></td>
        </tr>
        <tr>
            <td>Gujarath Titans</td>
            <td>Ahmedabad,Gujarath</td>
            <td>Narendra modi Stadium</td>
            <td>2002</td>
            <td><ul>
                <li>Steve Koltes</li>
                <li>Juhi Chawla</li>
                <li>Jay mehta</li>
            </ul></td>
        </tr>
        <tr>
            <td>Kolkata Knight Riders</td>
            <td>Kolkata,West Bengal</td>
            <td>Eden Gardens</td>
            <td>2008</td>
            <td><ul>
                <li>Shah Rukh khan</li>
                <li>Juhi Chawla</li>
                <li>Jay mehta</li>
            </ul></td>
        </tr>
        <tr>
            <td>Lucknow Supre Giants</td>
            <td>Lucknow,Uttar Pradesh</td>
            <td>BRSABV Ekana Cricket Stadium</td>
            <td>2022</td>
            <td>
                <ul>
                    <li>sanjiv Goenka</li>
                </ul>
            </td>
        </tr>
    </table>
            </div>
    )
}