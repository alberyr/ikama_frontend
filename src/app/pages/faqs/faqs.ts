import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-faqs',
  imports: [AccordionModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.scss'
})
export class Faqs {
  faqCategories = [
    {
      title: 'Para Inquilinos (Funcionarios)',
      items: [
        { q: '¿Qué documentación necesito para alquilar?', a: 'Únicamente tu DNI y el documento de nombramiento oficial o toma de posesión de la plaza en la localidad de destino.' },
        { q: '¿Cuánto dura el contrato?', a: 'Se firman contratos de arrendamiento de temporada (Ley de Arrendamientos Urbanos), adaptados exactamente a la duración de tu curso escolar, residencia médica o nombramiento temporal (generalmente de 9 a 11 meses).' },
        { q: '¿Tengo que pagar comisiones de agencia?', a: 'No. Nuestra plataforma cobra una tarifa de gestión operativa plana e inferior a una mensualidad, transparente desde el primer momento.' }
      ]
    },
    {
      title: 'Para Propietarios',
      items: [
        { q: '¿Qué garantías de cobro tengo?', a: 'Total. Al tratarse de funcionarios públicos, el riesgo de impago es prácticamente nulo. Aun así, todos los contratos incluyen un seguro de impago y actos vandálicos sin coste adicional para ti.' },
        { q: '¿Tengo que enseñar el piso yo mismo?', a: 'No es necesario. Puedes subir fotos y vídeos detallados. El perfil del funcionario desplazado suele alquilar de forma remota antes de llegar a la ciudad.' },
        { q: '¿Qué pasa si el inquilino se va antes de tiempo?', a: 'El contrato de temporada estipula penalizaciones por incumplimiento anticipado, protegiendo tu rentabilidad acordada.' }
      ]
    }
  ];
}