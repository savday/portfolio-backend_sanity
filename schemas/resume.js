export default{
    name:'resume',
    title:'Resume',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'text'
        },
        {
            name:'file',
            title:'File',
            type: 'file',
            options: {
              hotspot: true,
            },
        },
        
    ]
}