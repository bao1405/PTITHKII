import React, { useState } from 'react';
// Define a functional component
const AdminPage: React.FC = () => {
  const [showMenu, setShowMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setShowMenu(showMenu === menu ? null : menu);
  };

  return (
    <div className="bg-gray-200">
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
            <div className="flex">
                <a href="#" className="px-3 py-1 rounded hover:bg-gray-700 flex items-center mr-4">
                <i className="fas fa-home mr-2"></i>
                Home
                </a>
                <a href="#" className="px-3 py-1 rounded hover:bg-gray-700 flex items-center mr-4">
                <i className="fas fa-book mr-2"></i>
                Contents
                </a>
                <a href="#" className="px-3 py-1 rounded hover:bg-gray-700 flex items-center mr-4">
                <i className="fas fa-cogs mr-2"></i>
                Settings
                </a>
                <a href="#" className="px-3 py-1 rounded hover:bg-gray-700 flex items-center mr-4">
                <i className="fas fa-folder mr-2"></i>
                Category
                </a>
            </div>
            <div className="font-bold">Admin</div>
            </div>
        </div>
      </nav>
      {/* Content */}
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 bg-gray-800 p-4 text-white rounded">
          <button className="bg-white text-black py-2 px-8 rounded md:w-1/2 mb-2 mx-auto flex justify-center">+ New Item</button>
            <ul>
              {/* Đặt toggleMenu với tên của mỗi mục */}
              <li>
                <a href="#" onClick={() => toggleMenu('dashboard')} className="block py-2">Dashboard</a>
              </li>
              {showMenu === 'dashboard' && (
              <div>
                <ul className="sub-menu" style={{marginLeft:'25px'}}>
                    <li className="gap-4"><a href="#">Content 1</a></li>
                    <li className="gap-4"><a href="#">Content 2</a></li>
                    <li className="gap-4"><a href="#">Content 3</a></li>
                    <li className="gap-4"><a href="#">Content 4</a></li>
                    <li className="gap-4"><a href="#">Content 5</a></li>
                  </ul>
              </div>
            )}
              <li>
                <a href="#" onClick={() => toggleMenu('application')} className="block py-2">
                  Application
                </a>
              </li>
              {showMenu === 'application' && (
              <div>
                <ul className="sub-menu" style={{marginLeft:'25px'}}>
                    <li className="gap-4"><a href="#">Content 1</a></li>
                    <li className="gap-4"><a href="#">Content 2</a></li>
                    <li className="gap-4"><a href="#">Content 3</a></li>
                    <li className="gap-4"><a href="#">Content 4</a></li>
                    <li className="gap-4"><a href="#">Content 5</a></li>
                  </ul>
              </div>
            )}
              <li>
                <a href="#" onClick={() => toggleMenu('elements')} className="block py-2">
                  Elements
                </a>
              </li>
              {showMenu === 'elements' && (
              <div>
                <ul className="sub-menu" style={{marginLeft:'25px'}}>
                    <li className="gap-4"><a href="#">Content 1</a></li>
                    <li className="gap-4"><a href="#">Content 2</a></li>
                    <li className="gap-4"><a href="#">Content 3</a></li>
                    <li className="gap-4"><a href="#">Content 4</a></li>
                    <li className="gap-4"><a href="#">Content 5</a></li>
                  </ul>
              </div>
            )}
              <li>
                <a href="#" onClick={() => toggleMenu('forms')} className="block py-2">
                  Forms
                </a>
              </li>
              {showMenu === 'forms' && (
              <div>
                <ul className="sub-menu" style={{marginLeft:'25px'}}>
                    <li className="gap-4"><a href="#">Content 1</a></li>
                    <li className="gap-4"><a href="#">Content 2</a></li>
                    <li className="gap-4"><a href="#">Content 3</a></li>
                    <li className="gap-4"><a href="#">Content 4</a></li>
                    <li className="gap-4"><a href="#">Content 5</a></li>
                  </ul>
              </div>
            )}
              <li>
                <a href="#" onClick={() => toggleMenu('plugins')} className="block py-2">
                  Plugins
                </a>
              </li>
              {showMenu === 'plugins' && (
              <div>
                <ul className="sub-menu" style={{marginLeft:'25px'}}>
                    <li className="gap-4"><a href="#">Content 1</a></li>
                    <li className="gap-4"><a href="#">Content 2</a></li>
                    <li className="gap-4"><a href="#">Content 3</a></li>
                    <li className="gap-4"><a href="#">Content 4</a></li>
                    <li className="gap-4"><a href="#">Content 5</a></li>
                  </ul>
              </div>
            )}
              <li>
                <a href="#" onClick={() => toggleMenu('datagrid')} className="block py-2">
                  Datagrid
                </a>
              </li>
              {showMenu === 'datagrid' && (
              <div>
               <ul className="sub-menu" style={{marginLeft:'25px'}}>
                    <li className="gap-4"><a href="#">Content 1</a></li>
                    <li className="gap-4"><a href="#">Content 2</a></li>
                    <li className="gap-4"><a href="#">Content 3</a></li>
                    <li className="gap-4"><a href="#">Content 4</a></li>
                    <li className="gap-4"><a href="#">Content 5</a></li>
                  </ul>
              </div>
            )}
              <li>
                <a href="#" onClick={() => toggleMenu('settings')} className="block py-2">
                  Settings
                </a>
              </li>
              {showMenu === 'settings' && (
              <div>
                <ul className="sub-menu" style={{marginLeft:'25px'}}>
                    <li className="gap-4"><a href="#">Content 1</a></li>
                    <li className="gap-4"><a href="#">Content 2</a></li>
                    <li className="gap-4"><a href="#">Content 3</a></li>
                    <li className="gap-4"><a href="#">Content 4</a></li>
                    <li className="gap-4"><a href="#">Content 5</a></li>
                  </ul>
              </div>
            )}
            </ul>
          </div>
          {/* Main Content */}
          <div className="md:col-span-2 bg-gray p-1 rounded">
          <div className="flex items-center bg-white">
            <h2 className="text-lg font-bold mb-4 mr-4">Dashboard</h2>
            <button className="text-lg font-bold mb-4 mr-4">+ Add Contents</button>
            <div className="flex items-center mr-4">
                <a href="#" className="text-lg font-bold mb-4 mr-4">
                <i className="fas fa-cogs mr-1"></i>
                Settings
                </a>
                <div className="font-bold flex">
                    <input type="text" className="text-lg font-bold mb-4 mr-4 border border-black px-3 py-1 rounded ml-auto" placeholder="Search contents" />
                </div>  
            </div>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" style={{marginTop:'20px'}}>
              {/* Card 1 */}
              <div className="bg-white p-4 rounded shadow">
                <div className='flex'>
                <i className="fas fa-shopping-bag text-2xl mb-4"></i>
                <h3 className="font-bold text-lg mb-2">Total sciles</h3>
                </div>
                <p className="text-gray-700">1000</p>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-4 rounded shadow">
                <div className='flex'>
                  <i className="fas fa-gift text-3xl mb-4"></i>
                  <h3 className="font-bold text-lg mb-2">Total Posts</h3>
                </div>
                <p className="text-gray-700">500</p>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-4 rounded shadow">
              <div className='flex'>
                  <i className="fas fa-users text-2xl mb-4"></i> 
                  <h3 className="font-bold text-lg mb-2">Total visitors</h3>
                </div>
                <p className="text-gray-700">2000</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className='flex'>
                  <i className="fas fa-shopping-cart text-3xl mb-4"></i>
                  <h3 className="font-bold text-lg mb-2">Total orders</h3>
                </div>
                <p className="text-gray-700">2000</p>
              </div>
            </div>
            {/* form*/}
            <div className="bg-white" style={{ marginTop: '20px' }}>
              <h1 className="text-lg font-bold mb-4 mr-4" style={{marginLeft:'20px',marginTop:'10px'}}>Form title</h1>
              <p style={{marginLeft:'20px'}}>sed tortor, sed velit ridiculus ipsum pharetra locus adio gravida augue enim</p>
              <div className="bg-red-200 text-black py-2 px-4 rounded mb-4 flex items-center" style={{marginTop:'15px'}}>
                <div className="rounded-full h-3 w-3 bg-black mr-2"></div>
                <span>Senectus malesuada suspendisse bibendum elit amet vitae.</span>
              </div>
              <table className="table-auto w-full" style={{marginTop:'15px'}}>
                <thead>
                  <tr className="bg-gray">
                    <th className="border px-4 py-2">Column 1</th>
                    <th className="border px-4 py-2">Column 2</th>
                    <th className="border px-4 py-2">Column 3</th>
                    <th className="border px-4 py-2">Column 4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Row 1, Column 1</td>
                    <td className="border px-4 py-2">Row 1, Column 2</td>
                    <td className="border px-4 py-2">Row 1, Column 3</td>
                    <td className="border px-4 py-2">
                      <button className=' w-1/3 border-blue rounded-lg bg-blue-500 text-white'>edit</button>
                      <button className=' w-1/2 border-blue rounded-lg bg-orange-500 text-white' style={{marginLeft:'7px'}}>delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Row 2, Column 1</td>
                    <td className="border px-4 py-2">Row 2, Column 2</td>
                    <td className="border px-4 py-2">Row 2, Column 3</td>
                    <td className="border px-4 py-2">
                      <button className=' w-1/3 border-blue rounded-lg bg-blue-500 text-white'>edit</button>
                      <button className=' w-1/2 border-blue rounded-lg bg-orange-500 text-white' style={{marginLeft:'7px'}}>delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Row 2, Column 1</td>
                    <td className="border px-4 py-2">Row 2, Column 2</td>
                    <td className="border px-4 py-2">Row 2, Column 3</td>
                    <td className="border px-4 py-2">
                      <button className=' w-1/3 border-blue rounded-lg bg-blue-500 text-white'>edit</button>
                      <button className=' w-1/2 border-blue rounded-lg bg-orange-500 text-white' style={{marginLeft:'7px'}}>delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Row 2, Column 1</td>
                    <td className="border px-4 py-2">Row 2, Column 2</td>
                    <td className="border px-4 py-2">Row 2, Column 3</td>
                    <td className="border px-4 py-2">
                      <button className=' w-1/3 border-blue rounded-lg bg-blue-500 text-white'>edit</button>
                      <button className=' w-1/2 border-blue rounded-lg bg-orange-500 text-white' style={{marginLeft:'7px'}}>delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Row 2, Column 1</td>
                    <td className="border px-4 py-2">Row 2, Column 2</td>
                    <td className="border px-4 py-2">Row 2, Column 3</td>
                    <td className="border px-4 py-2">
                      <button className=' w-1/3 border-blue rounded-lg bg-blue-500 text-white'>edit</button>
                      <button className=' w-1/2 border-blue rounded-lg bg-orange-500 text-white' style={{marginLeft:'7px'}}>delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Row 2, Column 1</td>
                    <td className="border px-4 py-2">Row 2, Column 2</td>
                    <td className="border px-4 py-2">Row 2, Column 3</td>
                    <td className="border px-4 py-2">
                      <button className=' w-1/3 border-blue rounded-lg bg-blue-500 text-white'>edit</button>
                      <button className=' w-1/2 border-blue rounded-lg bg-orange-500 text-white' style={{marginLeft:'7px'}}>delete</button>
                    </td>
                  </tr> 
                  <tr>
                    <td className="border px-4 py-2">Row 2, Column 1</td>
                    <td className="border px-4 py-2">Row 2, Column 2</td>
                    <td className="border px-4 py-2">Row 2, Column 3</td>
                    <td className="border px-4 py-2">
                      <button className=' w-1/3 border-blue rounded-lg bg-blue-500 text-white'>edit</button>
                      <button className=' w-1/2 border-blue rounded-lg bg-orange-500 text-white' style={{marginLeft:'7px'}}>delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div >
                <ul className='flex justify-center gap-2' style={{marginTop:'10px'}}>
                  <li><button className='border border-black w-7 rounded-lg'>1</button></li>
                  <li><button className='border border-black w-7 rounded-lg'>2</button></li>
                  <li><button className='border border-black w-7 rounded-lg'>3</button></li>
                  <li><button className='border border-black w-7 rounded-lg'>4</button></li>
                  <li><button className='border border-black w-7 rounded-lg'>5</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default AdminPage;
