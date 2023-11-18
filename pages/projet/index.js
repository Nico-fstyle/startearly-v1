import { supabase } from '../../supabaseClient'
import React, { useState, useEffect } from 'react'

export default function Projets() {
  const [projets, setProjets] = useState([])

  useEffect(() => {
    fetchProjects().then(setProjets)
  }, [])

  async function fetchProjects() {
        
    const { data, error } = await supabase
        .from('Projet')
        .select('*')
        
  
    if (error) {
      console.error('Erreur lors de la récupération des projets:', error)
      return;
    }
    console.log(data)
    console.log(supabase)
    return data;
  }

  return (
    <div>
      <h1>Mes Projets</h1>
      <ul>
        {projets.map(projet => (
          <li key={projet.id}>{projet.name}</li> // Assurez-vous que 'nom' est une clé dans vos données de projet
        ))}
      </ul>
    </div>
  )
}
