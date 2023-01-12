import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Clientes',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Registrar',
        path: '/Registro-cliente',
        icon: <IoIcons.IoMdCreate />,
        cName: 'sub-nav'
      },
      {
        title: 'Consultar',
        path: '/ClienteRegistrado',
        icon: <IoIcons.IoMdSearch />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Vehículo',
    icon: <FaIcons.FaCar />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Registrar',
        path: '/Form',
        icon: <IoIcons.IoMdCreate />,
        cName: 'sub-nav'
      },
      {
        title: 'Consultar',
        path: '/ConsultaVehiculo',
        icon: <IoIcons.IoMdSearch />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Revisión',
    icon: <IoIcons.IoMdGlasses />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Motor',
        path: '/RevisionMotor',
        icon: <IoIcons.IoIosHammer />,
        cName: 'sub-nav'
      },
      {
        title: 'RUNT',
        path: "/Reporte",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Reportes',
   
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Motor',
        path: '/Reportemotor',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Técnico',
        path: '/Revisiontec',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Cerrar sesión',
    path:'/App',
    icon: <IoIcons.IoIosLogOut />
  }
];
