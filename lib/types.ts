export interface CVRoastResult {
  overall: {
    score: number
    summary: string
  }
  categories: {
    name: string
    score: number
    color: string
    feedback: {
      type: "positive" | "negative" | "warning"
      text: string
    }[]
  }[]
  improvementTips: {
    title: string
    description: string
    example: string
  }[]

}
const language = 'english'


// Sample data for development
export const sampleRoastResult: CVRoastResult = {
  "overall": {
    "score": 10,
    "summary": "Loh, CV lu ini kacau banget, bener-bener perlu banyak improvement. Awalnya, email lu 'johnsmith123@email.com', kayaknya dibuat pas SMP. Lu serius mau dapetin kerja dengan email segitu? Terus, di bagian 'Objective', 'mencari pekerjaan dengan gaji dan benefit bagus' bukan tujuan karir, itu tujuan hidup semua orang. Pengalaman kerja lu cuma daftar tugas yang nggak ada gunanya. 'Menangani pelanggan' dan 'mengoperasikan kasir' adalah tugas dasar yang nggak menunjukkan prestasi apa-apa. Pendidikan lu cuma sampai SMA, dan 'lulus' bukan prestasi. Skill lu cuma 'Microsoft Word' dan 'Facebook', tapi masih dikasih 'fast typer' yang nggak jelas. Referensi 'tersedia jika diminta'? Dasar. Sepertinya CV ini dibuat 10 menit sebelum melamar. Perlu banyak banget improvement, mulai dari format, isi, sampai bahasa yang digunakan. Lu harus menunjukkan pencapaian, bukan cuma tugas-tugas dasar."
  },
  "categories": [
    {
      "name": "Content Quality",
      "score": 5,
      "color": "#ff4d4d",
      "feedback": [
        {
          "type": "negative",
          "text": "Pengalaman kerja cuma daftar tugas yang nggak ada gunanya. Berikan hasil dan dampak pekerjaan lu."
        },
        {
          "type": "negative",
          "text": "Pendidikan cuma sampai SMA dan nggak ada pencapaian yang signifikan."
        },
        {
          "type": "negative",
          "text": "Skill yang lu cantumkan terlalu umum dan nggak relevan dengan pekerjaan yang dilamar."
        }
      ]
    },
    {
      "name": "Formatting",
      "score": 20,
      "color": "#ffcc00",
      "feedback": [
        {
          "type": "warning",
          "text": "Format CV masih sangat sederhana dan kurang menarik."
        },
        {
          "type": "warning",
          "text": "Gunakan bullet point yang lebih rapi dan konsisten."
        }
      ]
    },
    {
      "name": "ATS Compatibility",
      "score": 15,
      "color": "#ff9900",
      "feedback": [
        {
          "type": "negative",
          "text": "CV nggak ada kata kunci yang relevan dengan pekerjaan yang dilamar."
        },
        {
          "type": "warning",
          "text": "Format CV masih bisa dioptimasi untuk lebih kompatibel dengan ATS."
        }
      ]
    }
  ],
  "improvementTips": [
    {
      "title": "Tingkatkan Kualitas Pengalaman Kerja",
      "description": "Ubah pengalaman kerja menjadi pencapaian yang spesifik dan terukur.",
      "example": "Daripada 'Menangani pelanggan', gunakan 'Meningkatkan kepuasan pelanggan sebesar 25% melalui penanganan komplain yang efektif'."
    },
    {
      "title": "Perbaiki Skill yang Relevan",
      "description": "Cantumkan skill yang relevan dengan pekerjaan yang dilamar dan berikan contoh spesifik.",
      "example": "Daripada 'Microsoft Word', gunakan 'Menguasai Microsoft Office Suite, terutama Word dan Excel, dengan kecepatan mengetik 70 wpm'."
    },
    {
      "title": "Optimalkan Format CV",
      "description": "Gunakan format yang lebih modern dan profesional serta pastikan ATS compatibility.",
      "example": "Gunakan template CV yang profesional dan pastikan untuk menyimpan file dalam format .docx atau .pdf yang sesuai dengan ATS."
    }
  ]
}

export default language