const Nama = "SofyanIrwanda";

// output harus kebalikan Nama : adnawrInayfoS
// Soal Reverse

const NamaArray = Nama.split("");

reverse = (array) => array.map(array.pop, [...array]).join("");

console.info(reverse(NamaArray));

// mengurutkan data 12,11,15,18,

const data = [12, 10, 15, 14, 13, 16, 11];

function bubbleSort(data) {
  let checked;
  do {
    checked = false;
    for (let i = 0; i <= data.length; i++) {
      if (data[i] > data[i + 1]) {
        let temp = data[i];
        data[i] = data[i + 1];
        data[i + 1] = temp;
        checked = true;
      }
    }
  } while (checked);

  return data;
}

console.log(bubbleSort(data));

// w3scholl sql

const dataDummy = [
  {
    judul: "Frozen",
    umur: 17,
    pukul: [
      {
        jam: 08,
      },
      {
        jam: 09,
      },
      {
        jam: 10,
      },
    ],
  },
  {
    judul: "Palami",
    umur: 20,
    pukul: [
      {
        jam: 01,
      },
      {
        jam: 02,
      },
      {
        jam: 03,
      },
    ],
  },
  {
    judul: "Pengabdi Setan",
    umur: 22,
    pukul: [
      {
        jam: 14,
      },
      {
        jam: 15,
      },
      {
        jam: 16,
      },
    ],
  },
];
