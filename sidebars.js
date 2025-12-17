/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // To manually control the order, define it here:
  tutorialSidebar: [

    {
      type: 'category',
      label: 'Chapter 2: The Course Details',
      items: ['chapter2/index'],
    },
    {
      type: 'category',
      label: 'Chapter 3: The Robotic Nervous System (ROS 2)',
      items: ['chapter3/index'],
    },
    {
      type: 'category',
      label: 'Chapter 4: The Digital Twin (Gazebo & Unity)',
      items: ['chapter4/index'],
    },
    {
      type: 'category',
      label: 'Chapter 5: The AI-Robot Brain (NVIDIA Isaac™)',
      items: ['chapter5/index'],
    },
    {
      type: 'category',
      label: 'Chapter 6: Vision-Language-Action (VLA)',
      items: ['chapter6/index'],
    },
    {
      type: 'category',
      label: 'Chapter 7: Weekly Breakdown',
      items: ['chapter7/index'],
    },
    {
      type: 'category',
      label: 'Chapter 8: Hardware Requirements',
      items: ['chapter8/index'],
    },
    {
      type: 'category',
      label: 'Chapter 9: The "Physical AI" Edge Kit',
      items: ['chapter9/index'],
    },
    {
      type: 'category',
      label: 'Chapter 10: The Robot Lab',
      items: ['chapter10/index'],
    },
    {
      type: 'category',
      label: 'Chapter 11: The "Ether" Lab (Cloud-Native)',
      items: ['chapter11/index'],
    },
    // Add future chapters here
  ],
};
module.exports = sidebars;
