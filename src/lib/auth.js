import { supabase } from "./supabase";

export const signUp = async (email, password, options = {}) => {
  return await supabase.auth.signUp({
    email, 
    password,
    ...options,
  });
};  

export const signIn = async (email, password) => {
  return await supabase.auth.signInWithPassword({
    email,  
    password,
  });
};

export const signOut = async () => {
  return await supabase.auth.signOut();  
};