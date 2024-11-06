import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';

// Data contoh untuk film
const movies = [
  { 
    id: '1', 
    title: 'Inception', 
    poster: 'https://i.pinimg.com/474x/57/8b/00/578b00ad9246c4f6e552221f25d52c8c.jpg',  // Link gambar
    description: 'Seorang pencuri yang mencuri rahasia perusahaan dengan menggunakan teknologi berbagi mimpi.' 
  },
  { 
    id: '2', 
    title: 'Interstellar', 
    poster: 'https://upload.wikimedia.org/wikipedia/id/b/bc/Interstellar_film_poster.jpg',  // Link gambar
    description: 'Sebuah tim penjelajah melintasi lubang cacing di luar angkasa untuk memastikan kelangsungan hidup umat manusia.' 
  },
  { 
    id: '3', 
    title: 'The Dark Knight', 
    poster: 'https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg',  // Link gambar
    description: 'Batman harus menerima salah satu ujian psikologis dan fisik terbesar dalam kemampuannya untuk melawan ketidakadilan.' 
  },
];

// Komponen untuk menampilkan daftar film secara horizontal
const MovieList = ({ onSelectMovie }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
    {movies.map((item) => (
      <View key={item.id} style={{ alignItems: 'center', margin: 15 }}>
        <TouchableOpacity onPress={() => onSelectMovie(item)}>
          <Image 
            source={{ uri: item.poster }} 
            style={{ width: 150, height: 225, borderRadius: 10 }} // Ukuran gambar diperbesar
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          {item.title}
        </Text>
      </View>
    ))}
  </View>
);

// Komponen untuk menampilkan detail film
const MovieDetails = ({ movie, onBack }) => (
  <View style={{ alignItems: 'center', padding: 20 }}>
    <Image 
      source={{ uri: movie.poster }} 
      style={{ width: 250, height: 375, borderRadius: 10 }} // Ukuran gambar diperbesar
      resizeMode="contain"
    />
    <Text style={{ marginTop: 20, fontSize: 32, fontWeight: 'bold' }}>{movie.title}</Text> {/* Ukuran teks diperbesar */}
    <Text style={{ marginTop: 10, textAlign: 'center', paddingHorizontal: 10, fontSize: 22 }}>
      {movie.description}
    </Text>
    <TouchableOpacity onPress={onBack} style={{ marginTop: 20 }}>
      <Text style={{ color: 'blue', fontSize: 18 }}>Kembali ke Daftar</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fungsi untuk memilih film
  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie); // Mengatur selectedMovie menjadi film yang dipilih
  };

  // Fungsi untuk kembali ke daftar film
  const handleBackToList = () => {
    setSelectedMovie(null); // Mengatur selectedMovie menjadi null dan kembali ke daftar film
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBack={handleBackToList} />
      ) : (
        <MovieList onSelectMovie={handleSelectMovie} />
      )}
    </SafeAreaView>
  );
};

export default App;
