document.addEventListener("DOMContentLoaded", () => {
  // Use a unique variable name for the client
  const supabaseUrl = 'https://fvtsjqsmcyyohrkgerpe.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2dHNqcXNtY3l5b2hya2dlcnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2MTY1NDksImV4cCI6MjA4NzE5MjU0OX0.qVPNT5-J9b0hebwmcK3XnyCqvJ-mvec4o3zFik4L7CY';
  const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

  async function addMenu() {
    const title = document.getElementById('menuTitle').value;
    const price = parseFloat(document.getElementById('menuPrice').value);
    if (!title || isNaN(price)) return alert("Enter valid name and price!");

    const { data, error } = await supabaseClient.from('menus').insert([{ name: title, price }]);
    if (error) {
      console.error(error);
    } else {
      loadMenus();
      document.getElementById('menuTitle').value = '';
      document.getElementById('menuPrice').value = '';
    }
  }

  async function loadMenus() {
    const { data } = await supabaseClient.from('menus').select('*');
    const list = document.getElementById('menuList');
    list.innerHTML = '';
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.name + " - $" + item.price;
      list.appendChild(li);
    });
  }

  // Expose addMenu to global so button can call it
  window.addMenu = addMenu;

  // Load menu initially
  loadMenus();
});
