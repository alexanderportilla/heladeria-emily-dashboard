# Heladería Emily Dashboard

![Dashboard Heladeria Emily](https://github.com/alexanderportilla/heladeria-emily/blob/1e3a3054d6918b9ca935ba6cb8df3e803e8b36e9/heladeria-emily.png)

## Descripción del Proyecto

Este proyecto es un panel de control (*dashboard*) creado para la Heladería Emily. El objetivo del dashboard es proporcionar una herramienta visual y fácil de usar que permita a los usuarios gestionar distintos aspectos del negocio, como ventas, inventario, clientes, y más.

El panel incluye gráficos interactivos y herramientas de navegación para analizar el rendimiento de la heladería, identificar áreas de mejora y facilitar la toma de decisiones. Este proyecto ayuda a la administración de la Heladería Emily proporcionando información clave, como el total de ventas del mes, nuevos clientes, pedidos totales, y distribución de ventas por producto.

Las principales funcionalidades incluyen:

- **Total de Ventas**: Visualiza las ventas acumuladas del mes.
- **Nuevos Clientes**: Muestra cuántos nuevos clientes se han registrado.
- **Pedidos Totales**: Indica el número total de pedidos registrados.
- **Gráficos Interactivos**: Presentan datos como ingresos mensuales, visitas mensuales y la distribución de ventas por producto de manera clara y concisa.

Este tipo de información permite a los gerentes de la heladería tomar decisiones más informadas sobre promociones, productos más populares, y gestión del inventario.

## Tecnologías Utilizadas

Este proyecto está construido con las siguientes tecnologías:

- **React**: Biblioteca principal para la creación de la interfaz de usuario.
- **Chart.js y Recharts**: Utilizados para la visualización de datos con gráficos interactivos.
- **Styled Components**: Para el diseño de componentes reutilizables y estilos CSS.
- **Tailwind CSS**: Framework de utilidades CSS para un diseño rápido y coherente.
- **React Router**: Para la navegación entre las diferentes páginas del panel.
- **Axios**: Para manejar solicitudes HTTP y comunicar con APIs externas.

## Estructura del Proyecto

La estructura del proyecto se encuentra organizada de la siguiente forma:

```
heladeria-emily-dashboard/
├── public/
│   ├── data/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── Charts/
│   │   │   ├── BarChart.js
│   │   │   ├── LineChart.js
│   │   │   └── PieChart.js
│   │   ├── Card.js
│   │   ├── DashboardCards.js
│   │   ├── Header.js
│   │   └── Sidebar.js
│   ├── pages/
│   │   ├── About.js
│   │   ├── Alerts.js
│   │   ├── Customers.js
│   │   ├── Dashboard.js
│   │   ├── Inventory.js
│   │   ├── Sales.js
│   │   ├── Settings.js
│   │   └── Upgrade.js
│   ├── App.css
│   └── App.js
```

### Descripción de las Carpetas

- **public/**: Contiene el archivo principal HTML, el manifiesto de la aplicación y otros recursos estáticos.
- **src/assets/**: Incluye los activos como el logo de la heladería.
- **src/components/**: Componentes reutilizables, incluyendo los gráficos y otros elementos visuales.
- **src/pages/**: Páginas de la aplicación, cada una representando una sección del dashboard (e.g., Ventas, Inventario, Ajustes).

## Dependencias

Las principales dependencias utilizadas en el proyecto se encuentran especificadas en el archivo `package.json`. Algunas de las más relevantes son:

- **@mui/material**: Para el diseño de la interfaz de usuario.
- **chart.js** y **react-chartjs-2**: Para la generación de gráficos.
- **tailwindcss**: Framework para la gestión de estilos.

## Scripts Disponibles

En el proyecto puedes utilizar los siguientes scripts:

- `npm start`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run test`: Ejecuta las pruebas.

## Instalación y Uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/heladeria-emily-dashboard.git
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Iniciar el proyecto en modo desarrollo:
   ```bash
   npm start
   ```
4. Acceder a la aplicación en el navegador en `http://localhost:3000`.

## Contribuciones

Si deseas contribuir a este proyecto, por favor realiza un fork del repositorio, crea una rama para tus cambios y realiza un pull request cuando tu trabajo esté listo.

## Licencia

Este proyecto está bajo la licencia MIT. Sírvase consultar el archivo `LICENSE` para más detalles.

## Contacto

Para preguntas o sugerencias, puedes contactarme a través de [tu correo electrónico] o abrir un issue en GitHub.

