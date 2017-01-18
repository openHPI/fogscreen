export default function(){
  this.transition(
    this.fromRoute('home.start'),
    this.toRoute('home.openhpi'),
    this.use('fade'),
    this.reverse('fade')
  );
}
