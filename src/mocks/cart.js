import topImage from '../../assets/topImage.png';
import sellerLogo from '../../assets/logo.png';
import antenna2g3g from '../../assets/items/antenna2g3g.png';
import antennaWifi from '../../assets/items/antennaWifi.png';
import modem from '../../assets/items/modem.png';
import nodeMCU from '../../assets/items/nodeMCU.png';
import voltageConverter from '../../assets/items/voltageConverter.png';
import laserModule from '../../assets/items/laserModule.png';
import relayModule from '../../assets/items/relayModule.png';
import ultrasonicSensor from '../../assets/items/ultrasonicSensor.png';

const cart = {
  topImage: {
    title: "Carrinho",
    image: topImage
  },

  details: {
    title: "Detalhes do Carrinho",
    titleProduct: "Kit IoT",
    sellerLogo: sellerLogo,
    sellerName: "Nuvem's Shopping",
    description: "Um kit IoT que revoluciona a vida dos estudantes",
    price: "R$ 99,00"
  },

  items: {
    title: "Itens do Carrinho",
    list: [
      {
        name: "Antena 2G/3G",
        image: antenna2g3g,
      },
      {
        name: "Antena Wifi",
        image: antennaWifi,
      },
      {
        name: "Modem",
        image: modem,
      },
      {
        name: "Node MCU",
        image: nodeMCU,
      }
    ]
  },

  relatedItems: {
    title: "Itens Relacionados",
    list: [
      {
        name: "Conversor de Tensão",
        image: voltageConverter,
      },
      {
        name: "Módulo Laser",
        image: laserModule,
      },
      {
        name: "Módulo Relé",
        image: relayModule,
      },
      {
        name: "Sensor Ultrassônico",
        image: ultrasonicSensor,
      }
    ]
  }
}

export default cart;