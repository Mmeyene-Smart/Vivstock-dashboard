// function TimeframeSelector({ selected, onSelect }) {
//   const timeframes = [
//     { label: '7d', value: '7d' },
//     { label: '30d', value: '30d' },
//     { label: '90d', value: '90d' },
//     { label: '180d', value: '180d' },
//   ];

//   return (
//     <div className="flex gap-2 mb-4">
//       {timeframes.map(({ label, value }) => (
//         <button
//           key={value}
//           onClick={() => onSelect(value)}
//           className={`px-4 py-2 rounded-lg text-sm ${
//             selected === value
//               ? 'bg-app-gray text-white'
//               : 'text-gray-400'
//           }`}
//         >
//           {label}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default TimeframeSelector;