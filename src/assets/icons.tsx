import { SVGProps } from "react";
export const BellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991Z"
      stroke={props.stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994Z"
      stroke={props.stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
      stroke={props.stroke}
      strokeWidth={1.5}
    />
  </svg>
);

export const LightModeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 18.5C8.41015 18.5 5.5 15.5899 5.5 12C5.5 8.41015 8.41015 5.5 12 5.5C15.5899 5.5 18.5 8.41015 18.5 12C18.5 15.5899 15.5899 18.5 12 18.5Z"
      stroke={props.stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.8471 5.56711L19.3168 5.03678V5.03678L19.8471 5.56711ZM19.8471 4.15289L20.3774 3.62256L20.3774 3.62256L19.8471 4.15289ZM19.7171 5.69711L20.2474 6.22743V6.22743L19.7171 5.69711ZM18.3029 5.69711L17.7726 6.22744V6.22744L18.3029 5.69711ZM18.3029 4.28289L18.8332 4.81322V4.81322L18.3029 4.28289ZM18.4329 4.15289L17.9026 3.62257L18.4329 4.15289ZM5.69711 19.7171L6.22743 20.2474H6.22743L5.69711 19.7171ZM5.69711 18.3029L6.22744 17.7726H6.22744L5.69711 18.3029ZM5.56711 19.8471L5.03678 19.3168H5.03678L5.56711 19.8471ZM4.15289 19.8471L3.62256 20.3774L3.62256 20.3774L4.15289 19.8471ZM4.15289 18.4329L3.62257 17.9026L4.15289 18.4329ZM4.28289 18.3029L4.81322 18.8332H4.81322L4.28289 18.3029ZM5.56711 4.15289L6.09744 3.62256L5.56711 4.15289ZM4.15289 4.15289L3.62256 3.62256L3.62256 3.62256L4.15289 4.15289ZM5.69711 4.28289L6.22744 3.75256L6.22744 3.75256L5.69711 4.28289ZM5.69711 5.69711L6.22744 6.22744L6.22744 6.22744L5.69711 5.69711ZM4.28289 5.69711L3.75256 6.22744L3.75256 6.22744L4.28289 5.69711ZM4.15289 5.56711L3.62256 6.09744L4.15289 5.56711ZM19.7171 18.3029L20.2474 17.7726H20.2474L19.7171 18.3029ZM18.3029 18.3029L17.7726 17.7726L17.7726 17.7726L18.3029 18.3029ZM19.8471 18.4329L20.3774 17.9026V17.9026L19.8471 18.4329ZM19.8471 19.8471L20.3774 20.3774L20.3774 20.3774L19.8471 19.8471ZM18.4329 19.8471L17.9026 20.3774H17.9026L18.4329 19.8471ZM18.3029 19.7171L17.7726 20.2474V20.2474L18.3029 19.7171ZM20.3774 6.09743C21.0609 5.41402 21.0609 4.30598 20.3774 3.62256L19.3168 4.68322C19.4144 4.78085 19.4144 4.93915 19.3168 5.03678L20.3774 6.09743ZM20.2474 6.22743L20.3774 6.09743L19.3168 5.03678L19.1868 5.16678L20.2474 6.22743ZM17.7726 6.22744C18.456 6.91085 19.564 6.91085 20.2474 6.22743L19.1868 5.16678C19.0891 5.26441 18.9309 5.26441 18.8332 5.16678L17.7726 6.22744ZM17.7726 3.75256C17.0891 4.43598 17.0891 5.54402 17.7726 6.22744L18.8332 5.16678C18.7356 5.06915 18.7356 4.91086 18.8332 4.81322L17.7726 3.75256ZM17.9026 3.62257L17.7726 3.75257L18.8332 4.81322L18.9632 4.68322L17.9026 3.62257ZM20.3774 3.62256C19.694 2.93914 18.586 2.93915 17.9026 3.62257L18.9632 4.68322C19.0609 4.58559 19.2191 4.58559 19.3168 4.68322L20.3774 3.62256ZM6.22743 20.2474C6.91085 19.564 6.91085 18.456 6.22744 17.7726L5.16678 18.8332C5.26441 18.9309 5.26441 19.0891 5.16678 19.1868L6.22743 20.2474ZM6.09743 20.3774L6.22743 20.2474L5.16678 19.1868L5.03678 19.3168L6.09743 20.3774ZM3.62256 20.3774C4.30598 21.0609 5.41402 21.0609 6.09743 20.3774L5.03678 19.3168C4.93915 19.4144 4.78085 19.4144 4.68322 19.3168L3.62256 20.3774ZM3.62257 17.9026C2.93915 18.586 2.93914 19.694 3.62256 20.3774L4.68322 19.3168C4.58559 19.2191 4.58559 19.0609 4.68322 18.9632L3.62257 17.9026ZM3.75257 17.7726L3.62257 17.9026L4.68322 18.9632L4.81322 18.8332L3.75257 17.7726ZM6.22744 17.7726C5.54402 17.0891 4.43598 17.0891 3.75256 17.7726L4.81322 18.8332C4.91086 18.7356 5.06915 18.7356 5.16678 18.8332L6.22744 17.7726ZM13.75 2C13.75 1.0335 12.9665 0.25 12 0.25V1.75C12.1381 1.75 12.25 1.86193 12.25 2H13.75ZM13.75 2.08V2H12.25V2.08H13.75ZM12 3.83C12.9665 3.83 13.75 3.0465 13.75 2.08H12.25C12.25 2.21807 12.1381 2.33 12 2.33V3.83ZM10.25 2.08C10.25 3.0465 11.0335 3.83 12 3.83V2.33C11.8619 2.33 11.75 2.21807 11.75 2.08H10.25ZM10.25 2V2.08H11.75V2H10.25ZM12 0.25C11.0335 0.25 10.25 1.0335 10.25 2H11.75C11.75 1.86193 11.8619 1.75 12 1.75V0.25ZM13.75 21.92C13.75 20.9535 12.9665 20.17 12 20.17V21.67C12.1381 21.67 12.25 21.7819 12.25 21.92H13.75ZM13.75 22V21.92H12.25V22H13.75ZM12 23.75C12.9665 23.75 13.75 22.9665 13.75 22H12.25C12.25 22.1381 12.1381 22.25 12 22.25V23.75ZM10.25 22C10.25 22.9665 11.0335 23.75 12 23.75V22.25C11.8619 22.25 11.75 22.1381 11.75 22H10.25ZM10.25 21.92V22H11.75V21.92H10.25ZM12 20.17C11.0335 20.17 10.25 20.9535 10.25 21.92H11.75C11.75 21.7819 11.8619 21.67 12 21.67V20.17ZM2 10.25C1.0335 10.25 0.25 11.0335 0.25 12H1.75C1.75 11.8619 1.86193 11.75 2 11.75V10.25ZM2.08 10.25H2V11.75H2.08V10.25ZM3.83 12C3.83 11.0335 3.0465 10.25 2.08 10.25V11.75C2.21807 11.75 2.33 11.8619 2.33 12H3.83ZM2.08 13.75C3.0465 13.75 3.83 12.9665 3.83 12H2.33C2.33 12.1381 2.21807 12.25 2.08 12.25V13.75ZM2 13.75H2.08V12.25H2V13.75ZM0.25 12C0.25 12.9665 1.0335 13.75 2 13.75V12.25C1.86193 12.25 1.75 12.1381 1.75 12H0.25ZM21.92 10.25C20.9535 10.25 20.17 11.0335 20.17 12H21.67C21.67 11.8619 21.7819 11.75 21.92 11.75V10.25ZM22 10.25H21.92V11.75H22V10.25ZM23.75 12C23.75 11.0335 22.9665 10.25 22 10.25V11.75C22.1381 11.75 22.25 11.8619 22.25 12H23.75ZM22 13.75C22.9665 13.75 23.75 12.9665 23.75 12H22.25C22.25 12.1381 22.1381 12.25 22 12.25V13.75ZM21.92 13.75H22V12.25H21.92V13.75ZM20.17 12C20.17 12.9665 20.9535 13.75 21.92 13.75V12.25C21.7819 12.25 21.67 12.1381 21.67 12H20.17ZM6.09744 3.62256C5.41402 2.93915 4.30598 2.93915 3.62256 3.62256L4.68322 4.68322C4.78085 4.58559 4.93915 4.58559 5.03678 4.68322L6.09744 3.62256ZM6.22744 3.75256L6.09744 3.62256L5.03678 4.68322L5.16678 4.81322L6.22744 3.75256ZM6.22744 6.22744C6.91085 5.54402 6.91085 4.43598 6.22744 3.75256L5.16678 4.81322C5.26441 4.91085 5.26441 5.06915 5.16678 5.16678L6.22744 6.22744ZM3.75256 6.22744C4.43598 6.91085 5.54402 6.91085 6.22744 6.22744L5.16678 5.16678C5.06915 5.26441 4.91085 5.26441 4.81322 5.16678L3.75256 6.22744ZM3.62256 6.09744L3.75256 6.22744L4.81322 5.16678L4.68322 5.03678L3.62256 6.09744ZM3.62256 3.62256C2.93915 4.30598 2.93915 5.41402 3.62256 6.09744L4.68322 5.03678C4.58559 4.93915 4.58559 4.78085 4.68322 4.68322L3.62256 3.62256ZM20.2474 17.7726C19.564 17.0891 18.456 17.0891 17.7726 17.7726L18.8332 18.8332C18.9309 18.7356 19.0891 18.7356 19.1868 18.8332L20.2474 17.7726ZM20.3774 17.9026L20.2474 17.7726L19.1868 18.8332L19.3168 18.9632L20.3774 17.9026ZM20.3774 20.3774C21.0609 19.694 21.0609 18.586 20.3774 17.9026L19.3168 18.9632C19.4144 19.0609 19.4144 19.2191 19.3168 19.3168L20.3774 20.3774ZM17.9026 20.3774C18.586 21.0609 19.694 21.0609 20.3774 20.3774L19.3168 19.3168C19.2191 19.4144 19.0609 19.4144 18.9632 19.3168L17.9026 20.3774ZM17.7726 20.2474L17.9026 20.3774L18.9632 19.3168L18.8332 19.1868L17.7726 20.2474ZM17.7726 17.7726C17.0891 18.456 17.0891 19.564 17.7726 20.2474L18.8332 19.1868C18.7356 19.0891 18.7356 18.9309 18.8332 18.8332L17.7726 17.7726Z"
      fill="black"
    />
  </svg>
);

export const DarkModeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.9901 21.99C15.6801 22.15 18.9801 20.43 20.9601 17.72C21.7801 16.61 21.3401 15.87 19.9701 16.12C19.3001 16.24 18.6101 16.29 17.8901 16.26C13.0001 16.06 9.00009 11.97 8.98009 7.13996C8.97009 5.83996 9.24009 4.60996 9.73009 3.48996C10.2701 2.24996 9.62009 1.65996 8.37009 2.18996C4.41009 3.85996 1.70009 7.84996 2.03009 12.42C2.39009 17.57 6.76009 21.76 11.9901 21.99Z"
      stroke={props.stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 10c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3h2ZM19 10c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3h2ZM19 22c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3h2ZM7 22c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3h2Z"
    />
  </svg>
);

export const DocIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v10Z"
    />
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8"
    />
  </svg>
);

export const SettingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      clipRule="evenodd"
    />
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 11.12c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9v-1.76Z"
    />
  </svg>
);

export const MicOnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 13V8c0-3.31-2.69-6-6-6S6 4.69 6 8v5c0 3.31 2.69 6 6 6s6-2.69 6-6Z"
    />
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 11v2a9 9 0 0 0 18 0v-2M9.11 7.48a8 8 0 0 1 5.5 0M10.03 10.48c1.2-.33 2.47-.33 3.67 0"
    />
  </svg>
);

export const MicOffIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.82 6.53A6.008 6.008 0 0 0 12 2C8.69 2 6 4.69 6 8v5c0 1.46.52 2.8 1.39 3.84M18 9.98V13a6.005 6.005 0 0 1-8.08 5.63"
    />
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.86 19.58A9 9 0 0 0 21 13v-2M21.5 2.99l-19 19M11.55 5.5V2.26M8.5 3.5v4"
    />
  </svg>
);

export const SoundOffIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 8.37v-.96c0-2.98-2.07-4.12-4.59-2.54L7.49 6.7c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3v4c0 2 1 3 3 3h2M10.41 19.13c2.52 1.58 4.59.43 4.59-2.54v-3.64M18.81 9.42c.9 2.15.63 4.66-.81 6.58M21.15 7.8a10.82 10.82 0 0 1-1.32 10.7M22 2 2 22"
    />
  </svg>
);

export const SoundOnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeWidth={1.5}
      d="M2 14c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L7.49 6.7c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3v4Z"
    />
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 8a6.66 6.66 0 0 1 0 8M19.83 5.5a10.83 10.83 0 0 1 0 13"
    />
  </svg>
);

export const CalenderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeWidth={1.5}
      d="M18.56 20.29A2.228 2.228 0 0 1 16.38 22H3.24c-1.51 0-2.59-1.48-2.14-2.93L5.31 5.55a2.25 2.25 0 0 1 2.14-1.59h12.3c.95 0 1.74.58 2.07 1.38.19.43.23.92.11 1.42l-3.37 13.53Z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 22h4.78c1.29 0 2.3-1.09 2.21-2.38L22 6M9.68 6.38l1.04-4.32M16.38 6.39l.94-4.34M7.7 12h8M6.7 16h8"
    />
  </svg>
);

export const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.06 7.7a2.78 2.78 0 1 1 0-5.56 2.78 2.78 0 0 1 0 5.56ZM4.83 19.92a2.78 2.78 0 1 1 0-5.56 2.78 2.78 0 0 1 0 5.56ZM19.17 19.92a2.78 2.78 0 1 1 0-5.56 2.78 2.78 0 0 1 0 5.56Z"
      clipRule="evenodd"
    />
  </svg>
);

export const LogInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M2 12h12.88"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.65 8.65 16 12l-3.35 3.35"
    />
  </svg>
);

export const LogOutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M15 12H3.62M5.85 8.65 2.5 12l3.35 3.35"
    />
  </svg>
);

export const TimeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1"
    />
  </svg>
);
