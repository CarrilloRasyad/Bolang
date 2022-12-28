import Svg, {Path} from 'react-native-svg';

const InformasiIcon = props => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15.94 2.5C17.0009 2.5 18.0183 2.92143 18.7684 3.67157C19.5186 4.42172 19.94 5.43913 19.94 6.5H15.94V2.5Z"
        fill={props.primaryColor}
      />
      <Path
        d="M14.94 8.5C14.6748 8.5 14.4204 8.39464 14.2329 8.20711C14.0454 8.01957 13.94 7.76522 13.94 7.5V2.5H7.94C6.87914 2.5 5.86172 2.92143 5.11158 3.67157C4.36143 4.42172 3.94 5.43913 3.94 6.5V17.5C3.94 18.5609 4.36143 19.5783 5.11158 20.3284C5.86172 21.0786 6.87914 21.5 7.94 21.5H15.94C17.0009 21.5 18.0183 21.0786 18.7684 20.3284C19.5186 19.5783 19.94 18.5609 19.94 17.5V8.5H14.94ZM7.94 6.5H9.94C10.2052 6.5 10.4596 6.60536 10.6471 6.79289C10.8346 6.98043 10.94 7.23478 10.94 7.5C10.94 7.76522 10.8346 8.01957 10.6471 8.20711C10.4596 8.39464 10.2052 8.5 9.94 8.5H7.94C7.67479 8.5 7.42043 8.39464 7.2329 8.20711C7.04536 8.01957 6.94 7.76522 6.94 7.5C6.94 7.23478 7.04536 6.98043 7.2329 6.79289C7.42043 6.60536 7.67479 6.5 7.94 6.5V6.5ZM15.94 17.5H7.94C7.67479 17.5 7.42043 17.3946 7.2329 17.2071C7.04536 17.0196 6.94 16.7652 6.94 16.5C6.94 16.2348 7.04536 15.9804 7.2329 15.7929C7.42043 15.6054 7.67479 15.5 7.94 15.5H15.94C16.2052 15.5 16.4596 15.6054 16.6471 15.7929C16.8346 15.9804 16.94 16.2348 16.94 16.5C16.94 16.7652 16.8346 17.0196 16.6471 17.2071C16.4596 17.3946 16.2052 17.5 15.94 17.5V17.5ZM15.94 13H7.94C7.67479 13 7.42043 12.8946 7.2329 12.7071C7.04536 12.5196 6.94 12.2652 6.94 12C6.94 11.7348 7.04536 11.4804 7.2329 11.2929C7.42043 11.1054 7.67479 11 7.94 11H15.94C16.2052 11 16.4596 11.1054 16.6471 11.2929C16.8346 11.4804 16.94 11.7348 16.94 12C16.94 12.2652 16.8346 12.5196 16.6471 12.7071C16.4596 12.8946 16.2052 13 15.94 13V13Z"
        fill={props.secondColor}
      />
    </Svg>
  );
};

export default InformasiIcon;
