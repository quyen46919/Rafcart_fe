const dataAccordions = [
  {
    name: 'Shipping Information',
    data: [
      {
        title: 'How will my parcel be delivered? 😁',
        name: '1',
        description: ` 😁🤨🤨🧐😮‍💨🤏🫳🤢Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. This is a longer text to ensure that the content is more than 300 characters. " +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum eros et purus vehicula, id interdum elit consequat. 🤭🤥🤭🤟🫶😫👮‍♂️ ' +
          'Cras volutpat metus at justo faucibus, et hendrerit justo ullamcorper. Sed quis velit vitae nunc pharetra aliquet. Suspendisse potenti. Donec eget nulla in leo faucibus consequat nec nec risus.1000 Donec consequat, lacus sed tempor varius, mi mauris maximus erat, eget dignissim urna ligula ut tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus fringilla diam vel blandit luctus. Nullam quis velit tempus, porta purus at, dictum nunc. In id mollis ante. Cras bibendum laoreet consequat. Quisque tincidunt condimentum bibendum. Aliquam non interdum odio. Morbi dictum vitae magna id tempus. Maecenas dapibus, lorem vitae pellentesque dictum, justo mauris tempus ante, in elementum mauris tortor ut est. Fusce sapien lectus, eleifend sed sapien non, vulputate tincidunt ligula. Donec sit amet libero sit amet nulla facilisis feugiat id nec lorem. Duis vehicula consectetur eros, vitae sagittis mauris finibus sit amet. Sed malesuada augue sed tellus vehicula vulputate. 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. This description ensures the text is more than 1000 characters. ' + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum eros et purus vehicula, id interdum elit consequat. Cras volutpat metus at justofaucibusehendrerit justo ullamcorper. ' 'Sed quis velit vitae nunc pharetra aliquet. Suspendisse potenti. Donec eget nulla in leo faucibus consequat nec nec risus. Maecenas at urna augue. Donec nec eros nec eros volutpat pellentesque. ' 'Integer accumsan, risus a feugiat aliquet, nulla lectus auctor orci, id bibendum erat urna ac sapien. Proin sed tortor dolor. Sed ac justo vitae nunc pharetra aliqueSuspendisse potenti. '+'Donec eget nulla in leo faucibus consequat nec nec risus. Maecenas at urna augue. Donec nec eros nec eros volutpat pellentesque. Integer accumsan, risus a feugiat aliquet, nulla lectus auctor orci,"id bibendum erat urna ac sapien. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " 'printer took a galley of type and scrambled it to make a type specimen book.`
      },
      {
        title: `1000 Donec consequat, lacus sed tempor varius, mi mauris maximus erat, eget dignissim urna ligula ut tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus fringilla diam vel blandit luctus. Nullam quis velit tempus, porta purus at, dictum nunc. In id mollis ante. Cras bibendum laoreet consequat. Quisque tincidunt condimentum bibendum. Aliquam non interdum odio. Morbi dictum vitae magna id tempus. Maecenas dapibus, lorem vitae pellentesque dictum, justo mauris tempus ante, in elementum mauris tortor ut est. Fusce sapien lectus, eleifend sed sapien non, vulputate tincidunt ligula. Donec sit amet libero sit amet nulla facilisis feugiat id nec lorem. Duis vehicula consectetur eros, vitae sagittis mauris finibus sit amet. Sed malesuada augue sed tellus vehicula vulputate.
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. This description ensures the text is more than 1000 characters. ' +
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum eros et purus vehicula, id interdum elit consequat. Cras volutpat metus at justofaucibusehendrerit justo ullamcorper. ' 
          'Sed quis velit vitae nunc pharetra aliquet. Suspendisse potenti. Donec eget nulla in leo faucibus consequat nec nec risus. Maecenas at urna augue. Donec nec eros nec eros volutpat pellentesque. ' 'Integer accumsan, risus a feugiat aliquet, nulla lectus auctor orci, id bibendum erat urna ac sapien. Proin sed tortor dolor. Sed ac justo vitae nunc pharetra aliqueSuspendisse potenti. '+'Donec eget nulla in leo faucibus consequat nec nec risus. Maecenas at urna augue. Donec nec eros nec eros volutpat pellentesque. Integer accumsan, risus a feugiat aliquet, nulla lectus auctor orci,"id bibendum erat urna ac sapien. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "
          'printer took a galley of type and scrambled it to make a type specimen book.''`,
        name: '2',
        description:
          "<h1>Vd title đậm</h1>😁🤨🤨🧐😮‍💨🤏🫳🤢 <h1>Do I pay for delivery?</h1> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. " +
          'This description ensures the text is more than 500 characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum eros et purus vehicula, id interdum elit consequat. ' +
          'Cras volutpat metus at justo faucibus, et hendrerit justo ullamcorper. Sed quis velit vitae nunc pharetra aliquet. Suspendisse potenti. Donec eget nulla in leo faucibus consequat nec nec risus. ' +
          'Maecenas at urna augue. Donec nec eros nec eros volutpat pellentesque. Integer accumsan, risus a feugiat aliquet, nulla lectus auctor orci, id bibendum erat urna ac sapien. Proin sed tortor dolor. ' +
          'Sed ac justo vitae nunc pharetra aliquet. Suspendisse potenti. Donec eget nulla in leo faucibus consequat nec nec risus. Maecenas at urna augue. Donec nec eros nec eros volutpat pellentesque. ' +
          'Integer accumsan, risus a feugiat aliquet, nulla lectus auctor orci, id bibendum erat urna ac sapien.'
      },
      {
        title: 'How will my parcel be delivered? <h1>Vd title đậm</h1> 😻😼😵‍💫🫣🫣🫣🫣🫣🫣',
        name: '3',
        description: `
        1000 Donec consequat, lacus sed tempor varius, mi mauris maximus erat, eget dignissim urna ligula ut tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus fringilla diam vel blandit luctus. Nullam quis velit tempus, porta purus at, dictum nunc. In id mollis ante. Cras bibendum laoreet consequat. Quisque tincidunt condimentum bibendum. Aliquam non interdum odio. Morbi dictum vitae magna id tempus. Maecenas dapibus, lorem vitae pellentesque dictum, justo mauris tempus ante, in elementum mauris tortor ut est. Fusce sapien lectus, eleifend sed sapien non, vulputate tincidunt ligula. Donec sit amet libero sit amet nulla facilisis feugiat id nec lorem. Duis vehicula consectetur eros, vitae sagittis mauris finibus sit amet. Sed malesuada augue sed tellus vehicula vulputate.
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. This description ensures the text is more than 1000 characters. ' +
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum eros et purus vehicula, id interdum elit consequat. Cras volutpat metus at justofaucibusehendrerit justo ullamcorper. ' 
          'Sed quis velit vitae nunc pharetra aliquet. Suspendisse potenti. Donec eget nulla in leo faucibus consequat nec nec risus. Maecenas at urna augue. Donec nec eros nec eros volutpat pellentesque. ' 'Integer accumsan, risus a feugiat aliquet, nulla lectus auctor orci, id bibendum erat urna ac sapien. Proin sed tortor dolor. Sed ac justo vitae nunc pharetra aliqueSuspendisse potenti. '+'Donec eget nulla in leo faucibus consequat nec nec risus. Maecenas at urna augue. Donec nec eros nec eros volutpat pellentesque. Integer accumsan, risus a feugiat aliquet, nulla lectus auctor orci,"id bibendum erat urna ac sapien. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "
          'printer took a galley of type and scrambled it to make a type specimen book.'
           `
      },
      {
        title:
          '😻😼😵‍💫🫣🫣🫣🫣🫣🫣500 Donec consequat, lacus sed tempor varius, mi mauris maximus erat, eget dignissim urna ligula ut tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus fringilla diam vel blandit luctus. Nullam quis velit tempus, porta purus at, dictum nunc. In id mollis ante. Cras bibendum laoreet consequat. Quisque tincidunt condimentum bibendum. Aliquam non interdum odio. Morbi dictum vitae magna id tempus. Maecenas dapibus, lorem vitae pellentesque dictum, justo mauris tempus ante, in elementum mauris tortor ut est. Fusce sapien lectus, eleifend sed sapien non, vulputate tincidunt ligula. Donec sit amet libero sit amet nulla facilisis feugiat id nec lorem. Duis vehicula consectetur eros, vitae sagittis mauris finibus sit amet. Sed malesuada augue sed tellus vehicula vulputate.',
        name: '4',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type " +
          'and scrambled it to make a type specimen book.'
      }
    ]
  },
  {
    name: 'Orders And Returns ',
    data: [
      {
        title: 'Tracking my order 😻😼😵‍💫🫣🫣🫣🫣🫣🫣',
        name: '1',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam enim, in condimentum leo tempor ut. Proin elementum commodo purus, sed lobortis libero varius id. Curabitur tristique libero id leo dapibus suscipit. ' +
          'Donec porta tortor at fermentum feugiat. Velit sem dictum risus, quis euismod ante nibh hendrerit felis. Nam bibendum rutrum elit, non semper libero imperdiet et. Proin in dapibus libero, nec dictum turpis. Fusce quis aliquam libero, ' +
          'ac consectetur sapien. 🤭🤥🤭🤟🫶😫👮‍♂️'
      },
      {
        title: 'I haven’t received my order🫣🫣🫣🫣🫣🫣',
        name: '2',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam enim, in condimentum leo tempor ut. Proin elementum commodo purus, sed lobortis libero varius id. Curabitur tristique libero id leo dapibus suscipit. ' +
          'Donec porta tortor at fermentum feugiat. Velit sem dictum risus, quis euismod ante nibh hendrerit felis. Nam bibendum rutrum elit, non semper libero imperdiet et. Proin in dapibus libero, nec dictum turpis. Fusce quis aliquam libero, ' +
          'ac consectetur sapien.'
      },
      {
        title: 'How can I return an item? 😻😼😵‍💫',
        name: '3',
        description:
          "<h1>Return Process</h1> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam enim, in condimentum leo tempor ut. Proin elementum commodo purus, sed lobortis libero varius id. Curabitur tristique libero id leo dapibus suscipit. ' +
          'Donec porta tortor at fermentum feugiat.'
      },
      {
        title: 'Has my payment gone through?😻😼😵‍💫',
        name: '4',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'This description ensures the text is more than 300 characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum eros et purus vehicula, id interdum elit consequat. 🤭🤥🤭🤟🫶😫👮‍♂️ ' +
          'Cras volutpat metus at justo faucibus, et hendrerit justo ullamcorper. Sed quis velit vitae nunc pharetra aliquet. Suspendisse potenti. Donec eget nulla in leo faucibus consequat nec nec risus. ' +
          'Maecenas at urna augue. Donec nec eros nec eros volutpat pellentesque. Integer accumsan, risus a feugiat aliquet, nulla lectus auctor orci, id bibendum erat urna ac sapien.'
      }
    ]
  },
  {
    name: 'Orders And Returns',
    data: [
      {
        title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam enim, in condimentum leo tempor ut. Proin elementum commodo purus, sed lobortis libero varius id. Curabitur tristique libero id leo dapibus suscipit. ' +
          'Donec porta tortor at fermentum feugiat. Velit sem dictum risus, quis euismod ante nibh hendrerit felis. Nam bibendum rutrum elit, non semper libero imperdiet et. Proin in dapibus libero, nec dictum turpis. Fusce quis aliquam libero, ' +
          'ac consectetur sapien. 🤭🤥🤭🤟🫶😫👮‍♂️'`,
        name: '1',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam enim, in condimentum leo tempor ut. Proin elementum commodo purus, sed lobortis libero varius id. Curabitur tristique libero id leo dapibus suscipit. ' +
          'Donec porta tortor at fermentum feugiat. Velit sem dictum risus, quis euismod ante nibh hendrerit felis. Nam bibendum rutrum elit, non semper libero imperdiet et. Proin in dapibus libero, nec dictum turpis. Fusce quis aliquam libero, ' +
          'ac consectetur sapien. 🤭🤥🤭🤟🫶😫👮‍♂️ '
      },
      {
        title: 'I haven’t received my order',
        name: '2',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam enim, in condimentum leo tempor ut. Proin elementum commodo purus, sed lobortis libero varius id. Curabitur tristique libero id leo dapibus suscipit. ' +
          'Donec porta tortor at fermentum feugiat. Velit sem dictum risus, quis euismod ante nibh hendrerit felis. Nam bibendum rutrum elit, non semper libero imperdiet et. Proin in dapibus libero, nec dictum turpis. Fusce quis aliquam libero, ' +
          'ac consectetur sapien.'
      },
      {
        title: 'How can I return an item?',
        name: '3',
        description:
          "<h1>Return Process</h1> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam enim, in condimentum leo tempor ut. Proin elementum commodo purus, sed lobortis libero varius id. Curabitur tristique libero id leo dapibus suscipit. ' +
          'Donec porta tortor at fermentum feugiat.'
      },
      {
        title: 'Has my payment gone through?',
        name: '4',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'This description ensures the text is more than 300 characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum eros et purus vehicula, id interdum elit consequat. 🤭🤥🤭🤟🫶😫👮‍♂️ ' +
          'Cras volutpat metus at justo faucibus, et hendrerit justo ullamcorper. Sed quis velit vitae nunc pharetra aliquet. Suspendisse potenti. Donec eget nulla in leo faucibus consequat nec nec risus. ' +
          'Maecenas at urna augue. Donec nec eros nec eros volutpat pellentesque. Integer accumsan, risus a feugiat aliquet, nulla lectus auctor orci, id bibendum erat urna ac sapien.'
      }
    ]
  },
  {
    name: 'Orders And Returns',
    data: [
      {
        title: 'Tracking my order',
        name: '1',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam enim, in condimentum leo tempor ut. Proin elementum commodo purus, sed lobortis libero varius id. Curabitur tristique libero id leo dapibus suscipit. ' +
          'Donec porta tortor at fermentum feugiat. Velit sem dictum risus, quis euismod ante nibh hendrerit felis. Nam bibendum rutrum elit, non semper libero imperdiet et. Proin in dapibus libero, nec dictum turpis. Fusce quis aliquam libero, ' +
          'ac consectetur sapien. 🤭🤥🤭🤟🫶😫👮‍♂️'
      },
      {
        title: 'I haven’t received my order',
        name: '2',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam enim, in condimentum leo tempor ut. Proin elementum commodo purus, sed lobortis libero varius id. Curabitur tristique libero id leo dapibus suscipit. ' +
          'Donec porta tortor at fermentum feugiat. Velit sem dictum risus, quis euismod ante nibh hendrerit felis. Nam bibendum rutrum elit, non semper libero imperdiet et. Proin in dapibus libero, nec dictum turpis. Fusce quis aliquam libero, ' +
          'ac consectetur sapien.'
      },
      {
        title: 'How can I return an item?',
        name: '3',
        description:
          "<h1>Return Process</h1> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam enim, in condimentum leo tempor ut. Proin elementum commodo purus, sed lobortis libero varius id. Curabitur tristique libero id leo dapibus suscipit. ' +
          'Donec porta tortor at fermentum feugiat.'
      },
      {
        title: 'Has my payment gone through?',
        name: '4',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
          'This description ensures the text is more than 300 characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum eros et purus vehicula, id interdum elit consequat. 🤭🤥🤭🤟🫶😫👮‍♂️ ' +
          'Cras volutpat metus at justo faucibus, et hendrerit justo ullamcorper. Sed quis velit vitae nunc pharetra aliquet. Suspendisse potenti. Donec eget nulla in leo faucibus consequat nec nec risus. ' +
          'Maecenas at urna augue. Donec nec eros nec eros volutpat pellentesque. Integer accumsan, risus a feugiat aliquet, nulla lectus auctor orci, id bibendum erat urna ac sapien.'
      }
    ]
  }
]

export default dataAccordions
