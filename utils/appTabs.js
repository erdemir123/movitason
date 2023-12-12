import movita from "../public/movitaqr.png"
import movitaWeb from "../public/movitaapp.webp"
import movitaCamera from "../public/movitaCameraApp.webp"
import movitaServis from "../public/movitaServisApp.webp"
import movitaAt from "../public/movitaAtApp.webp"
import movitaAtqr from "../public/movitaAtAndroid.png"
import android from "../public/android.svg"
import all from "../public/all.svg"
import ios from "../public/ios.svg"
import windows from "../public/windows.svg"
import Image from "next/image";
export  const appTabs = [
    {
        id: 1,
        name: "Tümü",
        poKey: "Tümü",
        image: <Image src={all} alt="AI Icon" width={15} height={15}/>,
        apps:[
            {
                icon: <Image src={movitaWeb} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita',
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, araç içi kameralara uzaktan bağlanarak canlı veya geçmiş kayıtları görüntüleyebilirsiniz.',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>
              },
            {
                icon: <Image src={movitaServis} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita Servis',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araç içerisinde, cihaza WiFi ile bağlanarak, cihazın durumu, diskin doluluk oranı hakkında bilgi alabilir, koltuk sensörü özelliğini açabilir, kamerayı büyütebilirsiniz',
              },
            {
                icon: <Image src={movitaCamera} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita Kamera',
                description: 'MNVR cihazınıza bağlı olan kameraları kesintisiz bir şekilde izlemenize olanak sağlar.',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>
              },
            {
                icon: <Image src={movitaAt} alt="AI Icon" width={200} height={200}/>,
                title: 'MovitaAt',
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, raporları görüntüleyebilirsiniz',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>
              },
            {
                icon: <Image src={movitaWeb} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, araç içi kameralara uzaktan bağlanarak canlı veya geçmiş kayıtları görüntüleyebilirsiniz.',
              },
            {
                icon: <Image src={movitaServis} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita Servis',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araç içerisinde, cihaza WiFi ile bağlanarak, cihazın durumu, diskin doluluk oranı hakkında bilgi alabilir, koltuk sensörü özelliğini açabilir, kamerayı büyütebilirsiniz',
              },
            {
                icon: <Image src={movitaCamera} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita Kamera ',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'MNVR cihazınıza bağlı olan kameraları kesintisiz bir şekilde izlemenize olanak sağlar.',
              },
            {
                icon: <Image src={movitaAt} alt="AI Icon" width={200} height={200}/>,
                title: 'MovitaAt',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, raporları görüntüleyebilirsiniz',
              },
            {
                icon: <Image src={movitaWeb} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, araç içi kameralara uzaktan bağlanarak canlı veya geçmiş kayıtları görüntüleyebilirsiniz.',
              },
              
        ]
    },
    {
        id: 2,
        name: "Android",
        poKey: "Android",
        image: <Image src={android} alt="AI Icon" width={15} height={15}/>,
        apps:[
            {
                icon: <Image src={movitaWeb} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, araç içi kameralara uzaktan bağlanarak canlı veya geçmiş kayıtları görüntüleyebilirsiniz.',
              },
            {
                icon: <Image src={movitaServis} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita Servis',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araç içerisinde, cihaza WiFi ile bağlanarak, cihazın durumu, diskin doluluk oranı hakkında bilgi alabilir, koltuk sensörü özelliğini açabilir, kamerayı büyütebilirsiniz',
              },
            {
                icon: <Image src={movitaCamera} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita Kamera',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'MNVR cihazınıza bağlı olan kameraları kesintisiz bir şekilde izlemenize olanak sağlar.',
              },
            {
                icon: <Image src={movitaAt} alt="AI Icon" width={200} height={200}/>,
                title: 'MovitaAt',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, raporları görüntüleyebilirsiniz',
              },
            
              
        ]
    },
    {
        id: 3,
        name: "IOS",
        poKey: "IOS",
        image: <Image src={ios} alt="AI Icon" width={15} height={15}/>,
        apps:[
           
            {
                icon: <Image src={movitaWeb} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, araç içi kameralara uzaktan bağlanarak canlı veya geçmiş kayıtları görüntüleyebilirsiniz.',
              },
            {
                icon: <Image src={movitaServis} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita Servis',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araç içerisinde, cihaza WiFi ile bağlanarak, cihazın durumu, diskin doluluk oranı hakkında bilgi alabilir, koltuk sensörü özelliğini açabilir, kamerayı büyütebilirsiniz',
              },
            {
                icon: <Image src={movitaCamera} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita Kamera ',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'MNVR cihazınıza bağlı olan kameraları kesintisiz bir şekilde izlemenize olanak sağlar.',
              },
            {
                icon: <Image src={movitaAt} alt="AI Icon" width={200} height={200}/>,
                title: 'MovitaAt',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, raporları görüntüleyebilirsiniz',
              },
            
              
        ]
    },
    {
        id: 4,
        name: "Windows",
        poKey: "Windows",
        image: <Image src={windows} alt="AI Icon" width={15} height={15}/>,
        apps:[
            {
                icon: <Image src={movitaWeb} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, araç içi kameralara uzaktan bağlanarak canlı veya geçmiş kayıtları görüntüleyebilirsiniz.',
              },
              
        ]
    },
      
]