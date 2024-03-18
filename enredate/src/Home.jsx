import React from 'react'
import { Link } from 'react-router-dom'
import { SegmentedControl } from '@mantine/core';
import { Table } from '@mantine/core';

const Home = () => {

  const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      <body>
        <div class="circle-container">
            <div class="circle large"></div>
            <div class="circle small"></div>
        </div>

        <div class="content">
            <div className='enredate'>
              <h1>ENRÉDATE</h1>
              <small>RED DE NEGOCIOS ENTRE PADRES DE FAMILIA</small>
            </div>

        <div className='text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi moecenas quis interdum enim anim molestie faucibus. Pretium non non massa eros, nunc, urna. Ac lorem sagittis donec vel. Amet, duis justo, quam quisque egestas. Quam enim at dictum condimentum. Suspendisse.</p>
        </div>
          
        <Link to="/createAccount">
          <button>Comencemos</button>
        </Link>
        </div>
      </body>

    <div>

      <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Nombre</Table.Th>
          <Table.Th>Cantidad</Table.Th>
          <Table.Th>Estatus</Table.Th>
          <Table.Th>Comentarios</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>

    <SegmentedControl data={['Día', 'Semana', 'Mes', 'Año']} />

    </div>
    
    </div>
  )
}

export default Home
