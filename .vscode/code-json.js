// // *8. Create shareMsg()
// async function shareMsg() {
//   const result = await liff.shareTargetPicker([
//     {
//       type: 'flex',
//       altText: 'พิเศษ!! กิจกรรมเครดิตฟรี',
//       contents: {
//         type: 'carousel',
//         contents: [
//           {
//             type: 'bubble',
//             hero: {
//               type: 'image',
//               url: 'https://stackblitz.com/files/liff-c8ysgu/github/api-XDBet/liff-c8ysgu/master/image/flex/proXD8-1.png',
//               margin: 'none',
//               size: 'full',
//               aspectRatio: '6:3.5',
//               aspectMode: 'cover',
//               backgroundColor: '#212121FF',
//             },
//             body: {
//               type: 'box',
//               layout: 'vertical',
//               spacing: 'sm',
//               backgroundColor: '#212121FF',
//               borderColor: '#212121FF',
//               contents: [
//                 {
//                   type: 'text',
//                   text: 'ด่วน!!! สมาชิกใหม่',
//                   weight: 'bold',
//                   size: 'xxl',
//                   color: '#E1E1E1FF',
//                   wrap: true,
//                   contents: [],
//                 },
//                 {
//                   type: 'box',
//                   layout: 'baseline',
//                   backgroundColor: '#212121FF',
//                   borderColor: '#212121FF',
//                   contents: [
//                     {
//                       type: 'text',
//                       text: 'ฝากครั้งแรก',
//                       weight: 'bold',
//                       size: 'xl',
//                       color: '#E1E1E1FF',
//                       flex: 0,
//                       gravity: 'center',
//                       wrap: true,
//                       style: 'normal',
//                       contents: [],
//                     },
//                   ],
//                 },
//                 {
//                   type: 'text',
//                   text: '* โบนัสสูงสุด 9,999 บาท',
//                   weight: 'bold',
//                   size: 'sm',
//                   color: '#FF0600FF',
//                   contents: [],
//                 },
//               ],
//             },
//             footer: {
//               type: 'box',
//               layout: 'horizontal',
//               spacing: 'sm',
//               margin: 'none',
//               position: 'default',
//               backgroundColor: '#212121FF',
//               borderColor: '#212121FF',
//               contents: [
//                 {
//                   type: 'box',
//                   layout: 'horizontal',
//                   spacing: 'none',
//                   margin: 'none',
//                   borderWidth: '1px',
//                   backgroundColor: '#FFFFFFFF',
//                   borderColor: '#FFFFFFFF',
//                   cornerRadius: '10px',
//                   contents: [
//                     {
//                       type: 'button',
//                       action: {
//                         type: 'uri',
//                         label: 'สมัครสมาชิก',
//                         uri: 'https://m2.xd8bet.com/dashboard/login?id',
//                       },
//                       color: '#4C00E7FF',
//                       margin: 'none',
//                       height: 'sm',
//                       style: 'primary',
//                     },
//                   ],
//                 },
//                 {
//                   type: 'box',
//                   layout: 'horizontal',
//                   spacing: 'none',
//                   margin: 'none',
//                   borderWidth: '1px',
//                   backgroundColor: '#FFFFFFFF',
//                   borderColor: '#FFFFFFFF',
//                   cornerRadius: '10px',
//                   contents: [
//                     {
//                       type: 'button',
//                       action: {
//                         type: 'uri',
//                         label: 'ติดต่อแอดมิน',
//                         uri: 'https://rchat.readyplanet.com/1000046519',
//                       },
//                       color: '#02A200FF',
//                       margin: 'none',
//                       height: 'sm',
//                       style: 'primary',
//                     },
//                   ],
//                 },
//               ],
//             },
//           },
//           {
//             type: 'bubble',
//             hero: {
//               type: 'image',
//               url: 'https://stackblitz.com/files/liff-c8ysgu/github/api-XDBet/liff-c8ysgu/master/image/flex/proXD8-2.png',
//               margin: 'none',
//               size: 'full',
//               aspectRatio: '6:3.5',
//               aspectMode: 'cover',
//               backgroundColor: '#212121FF',
//             },
//             body: {
//               type: 'box',
//               layout: 'vertical',
//               spacing: 'sm',
//               backgroundColor: '#212121FF',
//               borderColor: '#212121FF',
//               contents: [
//                 {
//                   type: 'text',
//                   text: 'ฝากแรกของวัน',
//                   weight: 'bold',
//                   size: 'xxl',
//                   color: '#E1E1E1FF',
//                   wrap: true,
//                   contents: [],
//                 },
//                 {
//                   type: 'box',
//                   layout: 'baseline',
//                   backgroundColor: '#212121FF',
//                   borderColor: '#212121FF',
//                   contents: [
//                     {
//                       type: 'text',
//                       text: 'รับเพิ่ม 20%',
//                       weight: 'bold',
//                       size: 'xl',
//                       color: '#E1E1E1FF',
//                       flex: 0,
//                       gravity: 'center',
//                       wrap: true,
//                       style: 'normal',
//                       contents: [],
//                     },
//                   ],
//                 },
//                 {
//                   type: 'text',
//                   text: '* โบนัสสูงสุด 2,000 บาท',
//                   weight: 'bold',
//                   size: 'sm',
//                   color: '#FF0600FF',
//                   contents: [],
//                 },
//               ],
//             },
//             footer: {
//               type: 'box',
//               layout: 'horizontal',
//               spacing: 'sm',
//               margin: 'none',
//               position: 'default',
//               backgroundColor: '#212121FF',
//               borderColor: '#212121FF',
//               contents: [
//                 {
//                   type: 'box',
//                   layout: 'horizontal',
//                   spacing: 'none',
//                   margin: 'none',
//                   borderWidth: '1px',
//                   backgroundColor: '#FFFFFFFF',
//                   borderColor: '#FFFFFFFF',
//                   cornerRadius: '10px',
//                   contents: [
//                     {
//                       type: 'button',
//                       action: {
//                         type: 'uri',
//                         label: 'สมัครสมาชิก',
//                         uri: 'https://m2.xd8bet.com/dashboard/login?id',
//                       },
//                       color: '#4C00E7FF',
//                       margin: 'none',
//                       height: 'sm',
//                       style: 'primary',
//                     },
//                   ],
//                 },
//                 {
//                   type: 'box',
//                   layout: 'horizontal',
//                   spacing: 'none',
//                   margin: 'none',
//                   borderWidth: '1px',
//                   backgroundColor: '#FFFFFFFF',
//                   borderColor: '#FFFFFFFF',
//                   cornerRadius: '10px',
//                   contents: [
//                     {
//                       type: 'button',
//                       action: {
//                         type: 'uri',
//                         label: 'ติดต่อแอดมิน',
//                         uri: 'https://rchat.readyplanet.com/1000046519',
//                       },
//                       color: '#02A200FF',
//                       margin: 'none',
//                       height: 'sm',
//                       style: 'primary',
//                     },
//                   ],
//                 },
//               ],
//             },
//           },
//           {
//             type: 'bubble',
//             hero: {
//               type: 'image',
//               url: 'https://stackblitz.com/files/liff-c8ysgu/github/api-XDBet/liff-c8ysgu/master/image/flex/proXD8-3.png',
//               margin: 'none',
//               size: 'full',
//               aspectRatio: '6:3.5',
//               aspectMode: 'cover',
//               backgroundColor: '#212121FF',
//             },
//             body: {
//               type: 'box',
//               layout: 'vertical',
//               spacing: 'sm',
//               backgroundColor: '#212121FF',
//               borderColor: '#212121FF',
//               contents: [
//                 {
//                   type: 'text',
//                   text: 'เพียงแนะนำเพื่อน',
//                   weight: 'bold',
//                   size: 'xxl',
//                   color: '#E1E1E1FF',
//                   wrap: true,
//                   contents: [],
//                 },
//                 {
//                   type: 'box',
//                   layout: 'baseline',
//                   backgroundColor: '#212121FF',
//                   borderColor: '#212121FF',
//                   contents: [
//                     {
//                       type: 'text',
//                       text: 'รับรายได้ 5%',
//                       weight: 'bold',
//                       size: 'xl',
//                       color: '#E1E1E1FF',
//                       flex: 0,
//                       gravity: 'center',
//                       wrap: true,
//                       style: 'normal',
//                       contents: [],
//                     },
//                   ],
//                 },
//                 {
//                   type: 'text',
//                   text: '* ชวนได้ไม่จำกัด',
//                   weight: 'bold',
//                   size: 'sm',
//                   color: '#FF0600FF',
//                   contents: [],
//                 },
//               ],
//             },
//             footer: {
//               type: 'box',
//               layout: 'horizontal',
//               spacing: 'sm',
//               margin: 'none',
//               position: 'default',
//               backgroundColor: '#212121FF',
//               borderColor: '#212121FF',
//               contents: [
//                 {
//                   type: 'box',
//                   layout: 'horizontal',
//                   spacing: 'none',
//                   margin: 'none',
//                   borderWidth: '1px',
//                   backgroundColor: '#FFFFFFFF',
//                   borderColor: '#FFFFFFFF',
//                   cornerRadius: '10px',
//                   contents: [
//                     {
//                       type: 'button',
//                       action: {
//                         type: 'uri',
//                         label: 'สมัครสมาชิก',
//                         uri: 'https://m2.xd8bet.com/dashboard/login?id',
//                       },
//                       color: '#4C00E7FF',
//                       margin: 'none',
//                       height: 'sm',
//                       style: 'primary',
//                     },
//                   ],
//                 },
//                 {
//                   type: 'box',
//                   layout: 'horizontal',
//                   spacing: 'none',
//                   margin: 'none',
//                   borderWidth: '1px',
//                   backgroundColor: '#FFFFFFFF',
//                   borderColor: '#FFFFFFFF',
//                   cornerRadius: '10px',
//                   contents: [
//                     {
//                       type: 'button',
//                       action: {
//                         type: 'uri',
//                         label: 'ติดต่อแอดมิน',
//                         uri: 'https://rchat.readyplanet.com/1000046519',
//                       },
//                       color: '#02A200FF',
//                       margin: 'none',
//                       height: 'sm',
//                       style: 'primary',
//                     },
//                   ],
//                 },
//               ],
//             },
//           },
//         ],
//       },
//     },
//   ]);
//   if (result) {
//     alert('Msg was shared!');
//   } else {
//     alert('ShareTargetPicker was cancelled by user');
//   }
//   liff.closeWindow();
// }
